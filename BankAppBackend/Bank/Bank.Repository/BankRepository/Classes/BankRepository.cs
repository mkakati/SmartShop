using Bank.DataAccess.Entities;
using Bank.Repository.BankRepository.Interfaces;
using Bank.ViewModels.Models.Bank;
using Bank.ViewModels.Models.PDF;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Mail;

namespace Bank.Repository.BankRepository.Classes
{
    public class BankRepository : IBankRepository
        {
        
        ReturnModel retMod = null;
        IframeModel frame = null;
            public BankRepository()
            {
            retMod = new ReturnModel();
            frame = new IframeModel();
            }
        
            public ReturnModel RegisterUserIntoDB(RegistrationModel reg)
            {
                using (var db = new sdirecttestdbEntities())
                {
                    var rec = db.Accounts.FirstOrDefault();
                if (rec != null)
                {
                    var lastacc = db.Accounts.ToList().LastOrDefault();
                    var check = db.Accounts.Where(x => x.Email == reg.Email).FirstOrDefault();
                    if (check == null)
                    {
                        var newadd = Convert.ToString(Convert.ToInt32(lastacc.AccountNo) + 1);
                        db.Accounts.Add(new Account()
                        {
                            FirstName = reg.FirstName,
                            LastName = reg.LastName,
                            CreatedBy = reg.FirstName + " " + reg.LastName,
                            Email = reg.Email,
                            PIN = reg.PIN,
                            OTP = reg.otp,
                            AccountNo = newadd,
                            IsVerified = false,
                            IsActive = true,
                            IsDeleted = false,
                            CreatedDate = DateTime.UtcNow,
                            ModifiedDate = DateTime.UtcNow,
                            Balance = 0,
                            OTP_Created = reg.OTP_Created,
                            OTP_Expiry = reg.OTP_Expiry,
                        });
                        int result = db.SaveChanges();
                        retMod.Id = result;
                        retMod.Message = "User Registered In DB";
                        return retMod;
                    }
                    else
                    {
                        retMod.Id = -1; //error message:user already exists
                        retMod.Message = "User Already Exists In DB,Please Login";
                        return retMod;
                    }
                }
                else
                {
                    var newadd = Convert.ToString(8000000 + 1);
                    db.Accounts.Add(new Account()
                    {
                        FirstName = reg.FirstName,
                        LastName = reg.LastName,
                        Email = reg.Email,
                        PIN = reg.PIN,
                        OTP = reg.otp,
                        AccountNo = newadd,
                        IsVerified = false,
                        IsActive = true,
                        IsDeleted = false,
                        CreatedDate = DateTime.UtcNow,
                        ModifiedDate = DateTime.UtcNow,
                        Balance = 0,
                        OTP_Created = reg.OTP_Created,
                        OTP_Expiry = reg.OTP_Expiry,
                    });
                    int result = db.SaveChanges();
                    retMod.Id = result;
                    return retMod;
                }
                }
            }
            public ReturnModel OTPSending(RegistrationModel reg)
            {
                EmailFormModel model = new EmailFormModel();
                var body = "<p>Email From: {0} ({1})</p><p>Message: Your OTP is " + reg.otp + "</p><p>{2}</p>";
                var message = new MailMessage();
                message.To.Add(new MailAddress(reg.Email));

                message.From = new MailAddress("testsdd007@gmail.com");
                message.Subject = "One Time Password For Registration";
                model.FromEmail = "testsdd007@gmail.com";
                model.FromName = "TEST";
                model.Message = "Valid for 30 minutes";
                message.Body = string.Format(body, model.FromName, model.FromEmail, model.Message);
                message.IsBodyHtml = true;

                using (var smtp = new SmtpClient())
                {
                    var credential = new NetworkCredential
                    {
                        UserName = "testsdd007@gmail.com",
                        Password = "sddtest123"
                    };
                    smtp.Credentials = credential;
                    smtp.Host = "smtp.gmail.com";
                    smtp.Port = 587;
                    smtp.EnableSsl = true;
                    smtp.Send(message);
                    string result = "Sent";
                    retMod.Message = result;
                    return retMod;
                }
            }
            public ReturnModel RegisteredUserFromDB(LoginModel login)
            {
                using (var db = new sdirecttestdbEntities())
                {
                    var query = db.Accounts.Where(x => x.Email == login.Email && x.PIN == login.PIN && x.IsDeleted==false).FirstOrDefault();
                    if (query != null)
                    {
                        if (query.IsVerified == true)
                        {
                            query.JWTToken = login.JWT;
                            query.JWT_Token_Created = DateTime.Now;
                            query.JWT_Token_Expired = DateTime.Now.AddMinutes(120);
                            db.SaveChanges();
                            retMod.AccountId = query.AccountId;
                            retMod.JWT = query.JWTToken;
                            retMod.Id = 1;
                            retMod.Message = "User Is Present In Database and Is Verified";
                        }
                        else 
                        {
                        retMod.AccountId = query.AccountId;
                            retMod.Id = 2;
                            retMod.Message = "User Is Present In Database But Is Not Verified";
                        }

                        return retMod;
                    }
                    else
                    {
                        retMod.Id = 0;
                        retMod.Message = "User Not Registered ";
                        return retMod;
                    }

                }

            }
            public ReturnModel OTPVerify(LoginModel login)
            {
                //bool IsVerified = false;
                using (var db = new sdirecttestdbEntities())
                {
                    var query = db.Accounts.Where(x => x.Email == login.Email && x.OTP == login.OTP && x.IsDeleted == false).FirstOrDefault();
                    if (query != null)
                    {
                        if(query.OTP_Expiry>login.OTP_NewCreated)
                        {
                            query.IsVerified = true;
                            int result = db.SaveChanges();
                            retMod.Id = result;
                            retMod.Message = "Success";
                            return retMod;
                        }
                        else
                        {
                            retMod.Id = -1;
                            retMod.Message = "OTP expired,Create new OTP";
                            return retMod;
                        }
                        
                    }
                    else
                    {
                        retMod.Id = 0;
                        retMod.Message = "Error";
                        return retMod;
                    }

                }
            }
            public ReturnModel OTPResend(LoginModel login)
            {
                using (var db = new sdirecttestdbEntities())
                {
                    var user = db.Accounts.Where(p => p.Email == login.Email && p.IsDeleted == false).FirstOrDefault();
                    if (user != null)
                    {
                        user.OTP = login.OTP;
                        user.OTP_Created = login.OTP_Created;
                        user.OTP_Expiry = login.OTP_NewExpiry;
                        int result1 = db.SaveChanges();
                        retMod.Id = result1;

                    }
                }
                EmailFormModel model = new EmailFormModel();
                var body = "<p>Email From: {0} ({1})</p><p>Message: Your OTP is " + login.OTP + "</p><p>{2}</p>";
                var message = new MailMessage();
                message.To.Add(new MailAddress(login.Email));

                message.From = new MailAddress("testsdd007@gmail.com");
                message.Subject = "One Time Password For Registration";
                model.FromEmail = "testsdd007@gmail.com";
                model.FromName = "TEST";
                model.Message = "Valid for 30 minutes";
                message.Body = string.Format(body, model.FromName, model.FromEmail, model.Message);
                message.IsBodyHtml = true;

                using (var smtp = new SmtpClient())
                {
                    var credential = new NetworkCredential
                    {
                        UserName = "testsdd007@gmail.com",
                        Password = "sddtest123"
                    };
                    smtp.Credentials = credential;
                    smtp.Host = "smtp.gmail.com";
                    smtp.Port = 587;
                    smtp.EnableSsl = true;
                    smtp.Send(message);
                    string result = "Sent";
                    retMod.Message = result;
                    return retMod;
                }

            }
            public long ShowBalance(int AccountId)
            {
            using (var db = new sdirecttestdbEntities())
            {
                DateTime now = DateTime.Now;
                var expiry = db.Accounts.FirstOrDefault(x => x.AccountId == AccountId);
                if (now < expiry.JWT_Token_Expired)
                {
                    var query = from bal in db.Accounts where bal.AccountId == AccountId select bal.Balance;
                    if (query != null)
                    {
                        long? Abal = query.FirstOrDefault();
                        return Abal.Value;
                    }
                    else
                    {
                        return -1;
                    }
                }
                else
                {
                    //Token Expired..!! Please Login again
                    return 0;
                }
            }
            }
            public List<PersonalDetails> ShowDetails(int AccountId)
            {
                using (var db = new sdirecttestdbEntities())
                {
                DateTime now = DateTime.Now;
                var expiry = db.Accounts.FirstOrDefault(x => x.AccountId == AccountId);
                if (now < expiry.JWT_Token_Expired)
                {
                    var query = (from details in db.Accounts
                                 where details.AccountId == AccountId
                                 select new PersonalDetails
                                 {
                                     AccountNo = details.AccountNo,
                                     Name = details.FirstName +" " + details.LastName,
                                     Email = details.Email,
                                     Balance = details.Balance,
                                     CreatedDate = details.CreatedDate,
                                 }).ToList();
                    if (query != null)
                    {
                        return query;
                    }
                    else
                    {
                        return null;
                    }
                }
                else
                {
                    return null;
                }
                    

                }
            }
            public ReturnModel AddMoney(MoneyModel money) 
            {
                using (var db = new sdirecttestdbEntities())
                {
                DateTime now = DateTime.Now;
                var expiry = db.Accounts.FirstOrDefault(x => x.AccountId == money.AccountId);
                if (now < expiry.JWT_Token_Expired)
                {
                    var result = db.Accounts.FirstOrDefault(x => x.AccountId == money.AccountId && x.PIN == money.PIN);
                    if (result != null)
                    {
                        int val1 = db.usp_AddMoney(money.AccountId, money.AddBalance);
                        retMod.Id = val1;
                        retMod.Message = "Success";
                        return retMod;
                    }
                    else
                    {
                        retMod.Id = -1;
                        retMod.Message = "Incorrect Pin";
                        return retMod;
                    }
                }
                else
                {
                    retMod.Id = -500;
                    retMod.Message = "Token Expired";
                    return retMod;
                }
                }
            }
            public ReturnModel CredentialCheck(MoneyModel money) 
        {
            using (var db = new sdirecttestdbEntities())
            {
                    var result = db.Accounts.FirstOrDefault(x => (x.AccountNo == money.AccountNo || x.Email == money.Email) && x.IsDeleted == false);
                    if (result != null)
                    {
                        if (result.IsActive.Value && result.IsVerified.Value)
                        {
                            retMod.Id = 1;
                            retMod.Message = "Account no. found and Isverified";
                            return retMod;
                        }
                        else
                        {
                            retMod.Id = -1;
                            retMod.Message = "Account no. found but either it is not verified or not active";
                            return retMod;
                        }
                    }
                    else
                    {
                        retMod.Id = 0;
                        retMod.Message = "Account no. not found";
                        return retMod;
                    }
            }
        }
            public ReturnModel Balcheck(MoneyModel money)
        {
            using (var db = new sdirecttestdbEntities())
            {
                DateTime now = DateTime.Now;
                var expiry = db.Accounts.FirstOrDefault(x => x.AccountId == money.AccountId);
                if (now < expiry.JWT_Token_Expired)
                {
                    var query = from bal in db.Accounts where bal.AccountId == money.AccountId select bal.Balance;
                    if (query != null)
                    {
                        long? Abal = query.FirstOrDefault();
                        if (Abal.Value >= money.AddBalance)
                        {
                            retMod.Id = 1;
                            retMod.Message = "Balance Available";
                            return retMod;
                        }
                        else
                        {
                            retMod.Id = -1;
                            retMod.Message = "Insufficient Balance";
                            return retMod;
                        }
                    }
                    else
                    {
                        retMod.Id = 0;
                        retMod.Message = "Error";
                        return retMod;
                    }
                }
                else
                {
                    retMod.Id = -500;
                    retMod.Message = "Token Expired";
                    return retMod;
                }
                

            }
        }
            public ReturnModel SendMoney(MoneyModel money)
            {
                using (var db = new sdirecttestdbEntities())
                {
                DateTime now = DateTime.Now;
                var expiry = db.Accounts.FirstOrDefault(x => x.AccountId == money.AccountId);
                if (now < expiry.JWT_Token_Expired)
                {
                    var sender = db.Accounts.FirstOrDefault(x => x.AccountId == money.AccountId && x.PIN == money.PIN && x.IsDeleted == false);      //Sender's Account
                    if (sender != null)
                    {
                        var receiver = db.Accounts.FirstOrDefault(y => y.AccountNo == money.AccountNo && y.IsDeleted == false);                  //Receiver's Account
                        if (receiver != null)
                        {
                            int val = db.usp_SendMoney(money.AccountNo, money.AddBalance, money.AccountId);
                            retMod.Id = val;
                            retMod.Message = "Success";
                            return retMod;
                        }
                        else
                        {
                            retMod.Id = -2;
                            retMod.Message = "Receiver Not Found";
                            return retMod;
                        }
                    }
                    else
                    {
                        retMod.Id = 0;
                        retMod.Message = "Incorrect PIN";
                        return retMod;
                    }
                }
                else
                {
                    retMod.Id = -500;
                    retMod.Message = "Token Expired";
                    return retMod;
                }
                
                }
            }
            public List<TransactionsModel> TransHistory(ListModel lm)
            {
            using (var db = new sdirecttestdbEntities())
            {
                DateTime now = DateTime.Now;
                var expiry = db.Accounts.FirstOrDefault(x => x.AccountId == lm.AccountId);
                List<TransactionsModel> transList = new List<TransactionsModel>();
                if (now < expiry.JWT_Token_Expired)
                {
                        transList = (from list in db.usp_OffsetList(lm.Offset, lm.Limit, lm.Order, lm.Sort, lm.AccountId)
                                     select list).Select(x => new TransactionsModel()
                                     {
                                         Balance = x.Balance,
                                         Comments = x.Comments,
                                         Credit = x.Credit,
                                         Date = x.Date,
                                         Debit = x.Debit,
                                         Status = x.Status,
                                         TotalRows=x.totalCount
                                     }).ToList();
                        return transList;
                }
                else
                {
                    return null;
                }
                

            }
        }
            public ReturnModel ForgotPassword(LoginModel login)
        {
            using (var db = new sdirecttestdbEntities())
            {
                var result = db.Accounts.FirstOrDefault(x => x.Email == login.Email && x.IsActive==true && x.IsDeleted == false);
                if(result!=null)
                {
                    retMod.Id = 1;
                    retMod.Message = "Email is present,procedd to send email";
                    return retMod;
                }
                else
                {
                    retMod.Id = -1;
                    retMod.Message = "Email Does Not Exist In Our Records";
                    return retMod;
                }
            }
            
        }
            public ReturnModel LinkSending(LoginModel login)
        {
            using (var db = new sdirecttestdbEntities())
            {
                var acc = db.Accounts.FirstOrDefault(x => x.Email == login.Email && x.IsDeleted == false);
                if(acc!=null)
                {
                    string resetCode = Guid.NewGuid().ToString(); //creating guid for password chnge
                    SendVerificationLinkEmail(login.Email, resetCode);
                    acc.PasswordResetCode = resetCode;
                    DateTime tym = DateTime.UtcNow;
                    acc.Link_Created = tym;
                    acc.Link_Expired = tym.AddMinutes(30);
                    int chng=db.SaveChanges();
                    retMod.Id = chng;
                    retMod.Message = "Link has been send to your email";
                    return retMod;
                }
                else
                {
                    retMod.Id = -1;
                    retMod.Message = "Link can't be send";
                    return retMod;
                }
                
            }
        }
            public void SendVerificationLinkEmail(string Email, string resetCode )
            {
            //var link = Request.Url.AbsoluteUri.Replace(Request.Url.PathAndQuery, verifyUrl);
            var link = "http://localhost:4202/forgotpass?resetcode=" + resetCode;
            var fromEmail = new MailAddress("testsdd007@gmail.com", "Test");
            var toEmail = new MailAddress(Email);
            var fromEmailPassword = "sddtest123"; // Replace with actual password

            string subject = "";
            string body = "";
            {
                subject = "Reset Password";
                body = "Hi,<br/><br/>We got request for reset your account password. Please click on the below link to reset your password" +
                    "<br/><br/><a href=" + link + ">Reset Password link</a>" +
                    "<br/>This Link will expire in 30 minutes";
            }


            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromEmail.Address, fromEmailPassword)
            };

            using (var message = new MailMessage(fromEmail, toEmail)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            })
                smtp.Send(message);
            }
            public ReturnModel UpdatePassword(LoginModel login)
        {
            using (var db = new sdirecttestdbEntities())
            {
                var result = db.Accounts.FirstOrDefault(x => x.PasswordResetCode == login.GuId && x.IsDeleted == false);
                if (result != null)
                {
                    if(result.Link_Expired>login.updatetime)
                    {
                        result.PIN = login.PIN;
                        result.ModifiedDate = DateTime.UtcNow;
                        result.ModifiedBy = result.FirstName +" " + result.LastName;
                        var chng = db.SaveChanges();
                        retMod.Id = chng;
                        retMod.Message = "Pin Has Been Updated";
                        return retMod;
                    }
                    else
                    {
                        retMod.Id = -1;
                        retMod.Message = "Link Has Been Expired,Resend Link";
                        return retMod;
                    }
                }
                else
                {
                    retMod.Id = -1;
                    retMod.Message = "Email Does Not Exist In Our Records";
                    return retMod;
                }
            }
        }
            public ReturnModel ChangePassword(ChangePasswordModel model)
            {
            using (var db = new sdirecttestdbEntities())
            {
                DateTime now = DateTime.Now;
                var expiry = db.Accounts.FirstOrDefault(x => x.AccountId == model.AccountId);
                if (now < expiry.JWT_Token_Expired)
                {
                    var chng = db.Accounts.FirstOrDefault(x => x.AccountId == model.AccountId && x.PIN == model.PIN && x.IsDeleted == false);
                    if (chng != null)
                    {
                        chng.PIN = model.NewPIN;
                        int val = db.SaveChanges();
                        retMod.Id = val;
                        retMod.Message = "PIN Updated Successfully";
                        return retMod;
                    }
                    else
                    {
                        retMod.Message = "Incorrect Current PIN";
                        return retMod;
                    }
                }
                else
                {
                    retMod.Id = -500;
                    retMod.Message = "Token Expired";
                    return retMod;
                }
            }
            }
            public ReturnModel DelAcc(int AccountId)
            {
            using (var db = new sdirecttestdbEntities())
            {
                var query = db.Accounts.FirstOrDefault(x => x.AccountId == AccountId && x.IsActive==true );
                if(query!=null)
                {
                    query.IsActive = false;
                    query.IsDeleted = true;
                    int result = db.SaveChanges();
                    retMod.Id = result;
                    retMod.Message = "Account Successfully Deleted";
                    return retMod;
                }
                else
                {
                    retMod.Id = -1;
                    retMod.Message = "Account Can't be Deleted";
                    return retMod;
                }
            }
        }
            public ReturnModel BankLink(AccountModel model)  //In FrontEnd
        {
            using (var db = new sdirecttestdbEntities())
            {
                var query = db.Accounts.FirstOrDefault(x => x.AccountNo == model.AccountNo && x.PIN == model.PIN && x.IsActive == true);
                if (query != null)
                {
                    retMod.AccountId = query.AccountId;
                    retMod.Id = 1;
                    retMod.Message = "Account Successfully Linked";
                    return retMod;
                }
                else
                {
                    retMod.Message = "Account Can't be Linked";
                    return retMod;
                }
            }
        }
            public ReturnModel WithdrawMoney(MoneyModel money)
        {
            using (var db = new sdirecttestdbEntities())
            {
                var query = db.Accounts.FirstOrDefault(x => x.AccountId == money.AccountId && x.IsActive == true);
                if (query != null)
                {
                    money.AccountNo = query.AccountNo;
                    int val = db.usp_WithdrawMoney(money.AccountNo, money.AddBalance);
                    retMod.Id = val;
                    retMod.Message = "Success";
                    return retMod;
                }
                else
                {
                    retMod.Message = "Please,Check Your Account It Might Be Deleted";
                    return retMod;
                }
            }
        }
            public ReturnModel CheckAccountandSendOtp(string AccountNo)
            {
            using (var db = new sdirecttestdbEntities())
            {
                var query = db.Accounts.FirstOrDefault(x => x.AccountNo == AccountNo && x.IsActive == true);
                {
                    if(query!=null)
                    {
                        Random rnd = new Random();
                        int otp = rnd.Next(1000, 9999);
                        query.OTP = otp.ToString();
                        DateTime newdate = DateTime.UtcNow;
                        query.OTP_Created = newdate;
                        query.OTP_Expiry = newdate.AddMinutes(5);
                        db.SaveChanges();

                        string Email = query.Email;
                        EmailFormModel model = new EmailFormModel();
                        var body = "<p>Email From: {0} ({1})</p><p>Message: Your OTP is " + query.OTP + "</p><p>{2}</p>";
                        var message = new MailMessage();
                        message.To.Add(new MailAddress(Email));
                        message.From = new MailAddress("testsdd007@gmail.com");
                        message.Subject = "One Time Password For Making Payment To SmartShop";
                        model.FromEmail = "testsdd007@gmail.com";
                        model.FromName = "TEST";
                        model.Message = "Valid for 5 minutes";
                        message.Body = string.Format(body, model.FromName, model.FromEmail, model.Message);
                        message.IsBodyHtml = true;

                        using (var smtp = new SmtpClient())
                        {
                            var credential = new NetworkCredential
                            {
                                UserName = "testsdd007@gmail.com",
                                Password = "sddtest123"
                            };
                            smtp.Credentials = credential;
                            smtp.Host = "smtp.gmail.com";
                            smtp.Port = 587;
                            smtp.EnableSsl = true;
                            smtp.Send(message);
                            string result = "Sent";
                            retMod.Id = 1;
                            retMod.Message = result;
                            return retMod;
                        }
                    }
                    else
                    {
                        retMod.Id = -20;
                        retMod.Message = "Account Does not Exist";
                        return retMod;
                    }
                }
            }
            }
            public IframeModel PayCheckout( MoneyModel money)
            {
            using (var db = new sdirecttestdbEntities())
            {
                var sender = db.Accounts.FirstOrDefault(x => x.AccountNo == money.AccountNo && x.OTP==money.OTP && x.IsActive == true);
                DateTime currenttime = DateTime.UtcNow;
                if (sender != null) 
                {
                    if (sender.OTP_Expiry > currenttime)
                    {
                        if (sender.Balance >= money.Amount)
                        {
                            int val = db.usp_PayCheckout(money.AccountNo, money.Amount, money.OrderId);
                            var det = db.Transactions.Where(x=> x.OrderId==money.OrderId).FirstOrDefault();
                            frame.AccountId = det.AccountId;
                            frame.OrderId = det.OrderId;
                            frame.Amount = money.Amount;
                            frame.TransactionId = det.TransactionId;
                            frame.Id = val;
                            frame.Message = "Success";
                            return frame;

                        }
                        else
                        {
                            frame.Id = -100;
                            frame.Message = "Insufficient Balance";
                            return frame;
                        }
                    }
                    else
                    {
                        frame.Id = -500;
                        frame.Message = "OTP Expired";
                        return frame;
                    }

                }
                else
                {
                    frame.Id = -1;
                    frame.Message = "Account/Otp Incorrect";
                    return frame;
                    
                    
                }
            }
        }
            public ReturnModel CancelPayCheckout(MoneyModel money)
            {
            using (var db = new sdirecttestdbEntities())
            {
                var sender = db.Orders.FirstOrDefault(x => x.OrderId == money.OrderId && x.PaymentStatus == "Pending");
                if(sender!=null)
                {
                    //sender.PaymentStatus = "Canceled By User";
                    //int val = db.SaveChanges();
                    retMod.Id = 2;
                    retMod.Message = "Payment Canceled By User";
                    return retMod;
                }
                else
                {
                    retMod.Id = -1;
                    return retMod;
                }

            }
            }

        public ReturnModel InitiateRefund(RefundModel refund)
        {
            using (var db = new sdirecttestdbEntities())
            {
                //var sender = db.Accounts.FirstOrDefault(x => x.AccountNo == money.AccountNo && x.OTP == money.OTP && x.IsActive == true);
                int val = db.usp_RefundMoney(refund.OrderMasterId, refund.Amount);
                retMod.Id = val;
                retMod.Message = "Refund Success";
                return retMod;
            }

        }


    }
}