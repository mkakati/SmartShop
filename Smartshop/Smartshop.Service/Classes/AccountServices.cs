using Microsoft.IdentityModel.Tokens;
using Smartshop.DataAccess.Entities;
using Smartshop.DataAccess.Repository;
using Smartshop.Service.Interfaces;
using Smartshop.ViewModels.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.Service.Classes
{
    public class AccountServices : IAccountServices
    {
        // sdirecttestdbEntities db = new sdirecttestdbEntities();
        private readonly IAuthRepository _auth;

        public AccountServices(IAuthRepository auth)
        {
            _auth = auth;
        }
        public async Task<ApiResponse> RegisterBuyer(RegisterUserModel model)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var isExist = await _auth.GetUserByMail(model.Email);
                if (isExist)
                {
                    var master = await _auth.GetMasterUserByMail(model.Email);
                    var getexist = await _auth.GetRolesById(master.MasterUserId);
                    if (getexist.Contains("Seller") && !getexist.Contains("Buyer"))
                    {
                        throw new Exception("Email already Registered, if you want to become a Buyer Login and follow link in Seller Dashboard.");
                    }
                    else
                    {
                        throw new Exception("Email already Registered!");
                    }
                    //throw new Exception("Email already Registered!");
                }
                MasterUser masteruser = await _auth.RegisterMasterUsers(new MasterUser()
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    Mobile = model.Mobile,
                    Password = GetMD5HashData(model.Password),
                    CreatedBy = "null",
                    ModifiedBy = "null",
                    IsVerified=false,
                    IsActive=true
                });
                User buyer = await _auth.RegisterBuyer(new User()
                {
                    IsDeleted = false,
                    CreatedDate = DateTime.Now,
                    MasterUserId = masteruser.MasterUserId,
                    CreatedBy = "",
                    ModifiedBy = ""
                });
                if (buyer != null)
                {
                    await _auth.AddRoles(masteruser.MasterUserId, 1);
                    var role = await _auth.GetRolesById(masteruser.MasterUserId);
                    Random r = new Random();
                    var x = r.Next(0, 1000000);
                    string otp = x.ToString("000000");
                    var otpStatus = await SendOtp(masteruser.Email, "Your OTP for Verification is", otp);
                    if (otpStatus)
                    {
                        await _auth.AddOtp(masteruser.MasterUserId, otp);
                        var buyertoken = GenerateToken(masteruser, role, masteruser.IsVerified);
                        res.StatusCode = 200;
                        res.Message = "Success";
                        res.data = new { token = buyertoken };
                    }
                }
            }
            catch(Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }
        public async Task<ApiResponse> RegisterSeller(RegisterSellerModel model)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var isExist=await _auth.GetUserByMail(model.Email);
                if (isExist)
                {
                    var master=await _auth.GetMasterUserByMail(model.Email);
                    var getexist=await _auth.GetRolesById(master.MasterUserId);
                    if (getexist.Contains("Buyer"))
                    {
                        throw new Exception("Email already Registered, if you want to become a Seller Login and follow link in Navigation.");
                    }
                    else
                    {
                        throw new Exception("Email already Registered!");
                    }
                    //throw new Exception("Email already Registered!");
                }
                MasterUser masteruser=await _auth.RegisterMasterUsers(new MasterUser()
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    Mobile = model.Mobile,
                    Password = GetMD5HashData(model.Password),
                    CreatedBy = "null",
                    ModifiedBy = "null",
                    IsVerified = false,
                    IsActive=true
                });              
                Seller seller = await _auth.RegisterSeller(new Seller()
                { 
                    IsApproved = null,
                    IsDeleted = false,
                    CreatedDate = DateTime.Now,
                    MasterUserId = masteruser.MasterUserId,
                    CreatedBy = "",
                    ModifiedBy = "",
                    GST_No=model.GSTNo
                });
                if (seller != null)
                {
                    await _auth.AddRoles(masteruser.MasterUserId, 2);
                    var role = await _auth.GetRolesById(masteruser.MasterUserId);
                    Random r = new Random();
                    var x = r.Next(0, 1000000);
                    string otp = x.ToString("000000");
                    var otpStatus = await SendOtp(masteruser.Email, "Your OTP for Verification is:", otp);
                    if (otpStatus)
                    {
                        await _auth.AddOtp(masteruser.MasterUserId, otp);
                        var sellertoken = GenerateToken(masteruser, role, masteruser.IsVerified, seller.IsApproved);
                        res.StatusCode = 200;
                        res.Message = "Success";
                        res.data = new { token = sellertoken };
                    }
                        
                }
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
            //return _category.RegisterUsers(model);
        }

        public async Task<ApiResponse> LoginBuyer(LoginUserModel model)
        {
            ApiResponse res = new ApiResponse();
            string buyertoken;
            try
            {
                model.Password = GetMD5HashData(model.Password);
                var masteruser = await _auth.CheckLogin(model);
                var role = await _auth.GetRolesById(masteruser.MasterUserId);
                if (!role.Contains("Buyer") && role.Contains("Seller"))
                {
                    throw new Exception("You are already registered as seller, you may follow link in Seller dashboard to start purchasing!");
                }
                if(role.Contains("Buyer") && role.Contains("Seller"))
                {
                    var seller = await _auth.GetSellerByMasterId(masteruser.MasterUserId);
                    buyertoken= GenerateToken(masteruser, role, masteruser.IsVerified,seller.IsApproved);
                }
                else
                {
                    buyertoken = GenerateToken(masteruser, role, masteruser.IsVerified);
                }                
                res.StatusCode = 200;
                res.Message = "Success";
                res.data = new { token = buyertoken };
            }
            catch(Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }
        public async Task<ApiResponse> LoginSeller(LoginUserModel model)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                model.Password = GetMD5HashData(model.Password);
                var masteruser=await _auth.CheckLogin(model);
                var role=await _auth.GetRolesById(masteruser.MasterUserId);
                if (!role.Contains("Seller") && role.Contains("Buyer"))
                {
                    throw new Exception("You are already registered as Buyer, you may follow link in Navigation to start selling!");
                }
                var seller = await _auth.GetSellerByMasterId(masteruser.MasterUserId);
                var sellertoken = GenerateToken(masteruser, role, masteruser.IsVerified, seller.IsApproved);
                res.StatusCode = 200;
                res.Message = "Success";
                res.data = new { token = sellertoken };
            }
            catch(Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }

        public async Task<ApiResponse> BuyerToSeller(BuyertoSellerModel model)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var role = await _auth.GetRolesById(model.MasterUserId);
                if (role.Contains("Seller"))
                {
                    throw new Exception("Already a Seller!");
                }
                var master =await _auth.GetMasterByMasterId(model.MasterUserId);
                Seller seller = await _auth.RegisterSeller(new Seller()
                {
                    GST_No=model.GST,
                    IsApproved = null,
                    IsDeleted = false,
                    CreatedDate = DateTime.Now,
                    MasterUserId = master.MasterUserId,
                    CreatedBy = "",
                    ModifiedBy = ""
                });
                if (seller != null)
                {
                    await _auth.AddRoles(master.MasterUserId, 2);
                    var newrole = await _auth.GetRolesById(master.MasterUserId);                   
                    var sellertoken = GenerateToken(master, newrole, master.IsVerified, seller.IsApproved);
                    res.StatusCode = 200;
                    res.Message = "Success";
                    res.data = new { token = sellertoken };
                }
            }
            catch(Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }

        public async Task<ApiResponse> SellerToBuyer(int MasterUserId)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var role = await _auth.GetRolesById(MasterUserId);
                if (role.Contains("Buyer"))
                {
                    throw new Exception("Already a Buyer!");
                }
                var master = await _auth.GetMasterByMasterId(MasterUserId);
                var seller = await _auth.GetSellerByMasterId(master.MasterUserId);
                User buyer = await _auth.RegisterBuyer(new User()
                {
                    IsDeleted = false,
                    CreatedDate = DateTime.Now,
                    MasterUserId = master.MasterUserId,
                    CreatedBy = "",
                    ModifiedBy = ""
                });
                if (buyer != null)
                {
                    await _auth.AddRoles(master.MasterUserId, 1);
                    var newrole = await _auth.GetRolesById(master.MasterUserId);
                    var buyertoken = GenerateToken(master, newrole, master.IsVerified,seller.IsApproved);
                    res.StatusCode = 200;
                    res.Message = "Success";
                    res.data = new { token = buyertoken };
                    
                }
            }
            catch(Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }

        public async Task<ApiResponse> AdminLogin(LoginUserModel model)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var masteruser = await _auth.CheckLogin(model);
                var role = await _auth.GetRolesById(masteruser.MasterUserId);
                if (!role.Contains("Admin"))
                {
                    throw new Exception("No Admin account found associated to this email!");
                }
                var admintoken = GenerateToken(masteruser, role,true);
                res.StatusCode = 200;
                res.Message = "Success";
                res.data = new { token = admintoken };
            }
            catch(Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }

        public async Task<ApiResponse> VerifyOtp(VerifyUserModel model)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var master = await _auth.GetMasterByMasterId(model.MasterUserId);
                DateTime timenow = DateTime.UtcNow;
                var diff = timenow - Convert.ToDateTime(master.OTP_Expiry);
                if (diff.Minutes > 15)
                {
                    throw new Exception("OTP timed out! Please resend again");
                }
                if (master.OTP == model.Otp)
                {
                    string newtoken;
                    await _auth.UpdateOtp(master);
                    var role = await _auth.GetRolesById(master.MasterUserId);
                    var seller=await _auth.CheckSellerExistsByMasterId(master.MasterUserId);
                    if (seller == null)
                    {
                        newtoken = GenerateToken(master, role, master.IsVerified);
                    }
                    else
                    {
                        newtoken = GenerateToken(master, role, master.IsVerified, seller.IsApproved);
                    }
                    res.StatusCode = 200;
                    res.Message = "Success";
                    res.data = new { token=newtoken};
                }
                else
                {
                    throw new Exception("Otp not Verified!");
                }
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }
        public async Task<ApiResponse> ForgetPassword(string Email)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                Random r = new Random();
                var x = r.Next(0, 10000000);
                string token = x.ToString("00000000");
                var Status = await SendOtp(Email, "Your Token for resetting password is:", token);
                if (Status)
                {
                    await _auth.UpdateTokenInfo(Email,token);
                    res.StatusCode = 200;
                    res.Message = "Success";
                    res.data = null;
                }
            }
            catch(Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }

        public async Task<ApiResponse> ResetPasswordByToken(ResetPasswordModel model)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var user=await _auth.GetMasterUserByMail(model.Email);
                if (user.ResetToken != model.token)
                {
                    throw new Exception("Invalid token!");
                }
                var senttime = Convert.ToDateTime(user.ResetTimeOut);
                DateTime timenow = DateTime.UtcNow;
                var diff = timenow - senttime;
                if (diff.Minutes > 15)
                {
                    throw new Exception("Token expired, please send token to mail again!");
                }
                await _auth.UpdatePassword(user.MasterUserId, GetMD5HashData(model.NewPassword));
                res.StatusCode = 200;
                res.Message = "Success";
                res.data = null;
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }

        public async Task<ApiResponse> ChangePassword(ChangePasswordModel model)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                model.OldPassword = GetMD5HashData(model.OldPassword);
                var checkpass = await _auth.CheckOldPassword(model.MasterUserId, model.OldPassword);
                if (checkpass)
                {
                    await _auth.UpdatePassword(model.MasterUserId, GetMD5HashData(model.NewPassword));
                    res.StatusCode = 200;
                    res.Message = "Success";
                    res.data = null;
                }
                else
                {
                    throw new Exception("Error changing Password!");
                }
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }
        private string GetMD5HashData(string data)
        {
            MD5 md5 = MD5.Create();
            byte[] hashData = md5.ComputeHash(Encoding.Default.GetBytes(data));
            StringBuilder returnValue = new StringBuilder();

            for (int i = 0; i < hashData.Length; i++)
            {
                returnValue.Append(hashData[i].ToString());
            }
            return returnValue.ToString();

        }
        private const string Secret = "ERMN05OPLoDvbTTa/QkqLNMI7cPLguaRyHzyg";
        public string GenerateToken(MasterUser model,List<string> roles,bool? isVerified,bool? isApproved=null,int expireMinutes = 120)
        {
            var symmetricKey = Encoding.UTF8.GetBytes(Secret);
            var tokenHandler = new JwtSecurityTokenHandler();

            var now = DateTime.UtcNow;
            var claims = new List<Claim>();
            foreach(var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }
            claims.Add(new Claim("MasterUserId", model.MasterUserId.ToString()));
            claims.Add(new Claim("isVerified", isVerified.ToString()));
            claims.Add(new Claim("isApproved", isApproved.ToString()));
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject= new ClaimsIdentity(claims),
                Issuer = "https://smartshop.com",
                Audience= "https://smartshop.com",
                Expires = now.AddMinutes(Convert.ToInt32(expireMinutes)),

                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(symmetricKey),
                    SecurityAlgorithms.HmacSha256Signature)
            };

            var stoken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(stoken);

            return token;
        }

        private async Task<bool> SendOtp(string Email,string heading,string otp)
        {
            var body = "<p>{0} : {1} </p>";
            var message = new MailMessage();
            message.To.Add(new MailAddress(Email));  // replace with valid value 
            message.From = new MailAddress("testsdd007@gmail.com");  // replace with valid value
            message.Subject = "Otp for Email Verification";
            message.Body = string.Format(body, heading, otp);
            message.IsBodyHtml = true;

            using (var smtp = new SmtpClient())
            {
                var credential = new NetworkCredential
                {
                    UserName = "testsdd007@gmail.com",  // replace with valid value
                    Password = "sddtest123"  // replace with valid value
                };
                smtp.Credentials = credential;
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                smtp.EnableSsl = true;
                try
                {
                    await smtp.SendMailAsync(message);
                    return true;
                }
                catch(Exception e)
                {
                    throw new Exception("Mail could not be sent!");
                }
           
            }

        }
        public async Task<ApiResponse> ResendOtp(ResendOtp resend)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                Random r = new Random();
                var x = r.Next(0, 1000000);
                string otp = x.ToString("000000");
                var master = await _auth.GetMasterByMasterId(resend.MasterUserId);
                var otpStatus = await SendOtp(master.Email, "Your OTP for Verification is:", otp);
                if (otpStatus)
                {
                    await _auth.AddOtp(resend.MasterUserId, otp);
                    //var sellertoken = GenerateToken(masteruser, role, masteruser.IsVerified, seller.IsApproved);

                }

                res.StatusCode = 200;
                res.Message = "Success";
                res.data = null;

            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }

    }
}
