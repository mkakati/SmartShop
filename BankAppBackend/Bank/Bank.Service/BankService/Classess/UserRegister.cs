using Bank.Repository.BankRepository.Classes;
using Bank.Service.BankService.Interfaces;
using Bank.ViewModels.Models.Bank;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Web.Helpers;

namespace Bank.Service.BankService.Classess
{
    public class UserRegister : IUserRegister
    {
        BankRepository userRep;
        public UserRegister()
        {
            userRep = new BankRepository();
        }

        public ReturnModel SendOTP(RegistrationModel reg)
        {
            return userRep.OTPSending(reg);
        }
        public ReturnModel UserRegisterService(RegistrationModel reg)
        {
            //model.otp = Guid.NewGuid().ToString();
            Random rnd = new Random();
            int otp = rnd.Next(1000, 9999);
            reg.otp = otp.ToString();
            DateTime min= DateTime.UtcNow;
            DateTime OTP_Created = min;
            reg.OTP_Created = OTP_Created;
            DateTime OTP_Expiry = min.AddMinutes(30);
            reg.OTP_Expiry = OTP_Expiry;
            var hashed = "";
            hashed = Crypto.Hash(reg.PIN);
            reg.PIN = hashed;
            return userRep.RegisterUserIntoDB(reg);
        }
        public ReturnModel UserLoginService(LoginModel login)
        {
            //login.PIN = GetMD5HashData(login.PIN);
            var hashed = "";
            hashed = Crypto.Hash(login.PIN);
            login.PIN = hashed;
            var JWT = GenerateToken(login,null,120); 
            login.JWT = JWT;
            return userRep.RegisteredUserFromDB(login);
        }
        public ReturnModel OTPvalidate(LoginModel login)
        {
            DateTime now = DateTime.UtcNow;
            login.OTP_NewCreated = now;
            return userRep.OTPVerify(login);
        }
        public ReturnModel ResendOTP(LoginModel login)
        {
            Random rnd = new Random();
            int otp = rnd.Next(1000, 9999);
            login.OTP = otp.ToString();
            DateTime newdate = DateTime.UtcNow;
            login.OTP_Created = newdate;
            login.OTP_NewExpiry = newdate.AddMinutes(30);
            return userRep.OTPResend(login);
        }
        public long Balance(int AccountId)
        {
            return userRep.ShowBalance(AccountId);
        }
        public List<PersonalDetails> DetailsCheck(int AccountId)
        {
            return userRep.ShowDetails(AccountId);
        }
        public ReturnModel MoneyAdd(MoneyModel money)
        {
            //money.PIN = GetMD5HashData(money.PIN);
            var hashed = "";
            hashed = Crypto.Hash(money.PIN);
            money.PIN = hashed;
            return userRep.AddMoney(money);
        }
        public List<TransactionsModel> History(ListModel lm)
        {
            return userRep.TransHistory(lm);
        }
        public ReturnModel MoneySend(MoneyModel money)
        {
            //money.PIN = GetMD5HashData(money.PIN);
            var hashed = "";
            hashed = Crypto.Hash(money.PIN);
            money.PIN = hashed;
            return userRep.SendMoney(money);
        }
        public ReturnModel CheckCredential(MoneyModel money)
        {
            return userRep.CredentialCheck(money);
        }
        public ReturnModel CheckBal(MoneyModel money)
        {
            return userRep.Balcheck(money);
        }
        public ReturnModel PasswordForgot(LoginModel login)
        {
            return userRep.ForgotPassword(login);
        }
        public ReturnModel SendLink(LoginModel login)
        {
            
            return userRep.LinkSending(login);
        }
        public ReturnModel PasswordUpdate(LoginModel login)
        {
            var updatetime = DateTime.UtcNow;
            login.updatetime = updatetime;
            //login.PIN = GetMD5HashData(login.PIN);
            var hashed = "";
            hashed = Crypto.Hash(login.PIN);
            login.PIN = hashed;
            return userRep.UpdatePassword(login);
        }
        public ReturnModel PasswordChange(ChangePasswordModel model)
        {
            var hashed = "";
            hashed = Crypto.Hash(model.PIN);
            model.PIN = hashed;
            var hashedNew = "";
            hashedNew = Crypto.Hash(model.NewPIN);
            model.NewPIN = hashedNew;
            return userRep.ChangePassword(model);
        }
        public ReturnModel AccDel(int AccountId)
        {
            return userRep.DelAcc(AccountId);
        }

        public ReturnModel AccountAndOtp(string AccountNo)
        {
            
            return userRep.CheckAccountandSendOtp(AccountNo);
        }

        public IframeModel CheckoutPay(MoneyModel money)
        {
            return userRep.PayCheckout(money);
        }
        public ReturnModel CancelCheckoutPay(MoneyModel money)
        {
            return userRep.CancelPayCheckout(money);
        }

        public ReturnModel LinkBank(AccountModel model)
        {
            var hashed = "";
            hashed = Crypto.Hash(model.PIN);
            model.PIN = hashed;
            return userRep.BankLink(model);
        }
        public ReturnModel MoneyWithdraw(MoneyModel money)
        {
            return userRep.WithdrawMoney(money);
        }

        public ReturnModel RefundInitiate(RefundModel refund)
        {
            return userRep.InitiateRefund(refund);
        }







        //For Token Generation
        private const string Secret = "ERMN05OPLoDvbTTa/QkqLNMI7cPLguaRyHzyg";
        public string GenerateToken(LoginModel model, bool? isVerified = null, int expireMinutes = 120)
        { 
            var symmetricKey = Encoding.UTF8.GetBytes(Secret);
            var tokenHandler = new JwtSecurityTokenHandler();

            var now = DateTime.UtcNow;
            var claims = new List<Claim>();
            foreach (var role in model.Email)
            {
                claims.Add(new Claim(ClaimTypes.Email, role.ToString()));
            }
            claims.Add(new Claim("Email", model.Email.ToString()));
            claims.Add(new Claim("isVerified", isVerified.ToString()));

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Issuer = "https://Bank.com",
                Audience = "https://Bank.com",
                Expires = now.AddMinutes(Convert.ToInt32(expireMinutes)),
                SigningCredentials = new SigningCredentials(
            new SymmetricSecurityKey(symmetricKey),
            SecurityAlgorithms.HmacSha256Signature)
            };
            var stoken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(stoken);

            return token;
        }

       


        
    }
}