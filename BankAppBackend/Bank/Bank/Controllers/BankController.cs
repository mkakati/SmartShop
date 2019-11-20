using Bank.Service.BankService.Classess;
using Bank.ViewModels.Models.Bank;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace Bank.Controllers
{
    public class BankController : ApiController
    {
        UserRegister userSer = null;
        ReturnModel ret = null;
        RegistrationModel Reg = null;
        LoginModel login = null;
        MoneyModel money = null;
        IframeModel frame = null;
        List<PersonalDetails> details = null;
        List<TransactionsModel> transaction = null;
        public BankController()
        {
            ret = new ReturnModel();
            Reg = new RegistrationModel();
            userSer = new UserRegister();
            login = new LoginModel();
            money = new MoneyModel();
            frame = new IframeModel();
            details = new List<PersonalDetails>();
            transaction = new List<TransactionsModel>();
        }
        
        // For UserRegister
        [HttpPost]
        public IHttpActionResult PostUserSignUp(RegistrationModel model)
        {
            ret = userSer.UserRegisterService(model);
            if (ret.Id > 0)
            {
                ret = userSer.SendOTP(model);
                if (ret.Message == "Sent")
                {
                    return Ok("Success");
                }
                else
                {
                    //Otp not sent
                    return BadRequest("Fail");
                }
            }
            else if(ret.Id==-1)
            {
                //"User Is Already Registered"
                return Ok(-1);
            }
            else
            {
                return BadRequest("Not Registered");
            }
        }
        
        //For UserLogin
        [HttpPost]
        public IHttpActionResult PostUserLogin(LoginModel model)
        {
            ret = userSer.UserLoginService(model);
            if (ret.Id == 1)
            {
                return Ok(ret);//return Ok(new { Status = response == null ? HttpStatusCode.BadRequest : HttpStatusCode.OK, result = response });
            }
            else if (ret.Id == 2)
            {
                //"User Is Not Verified"
                return Ok(ret);
            }
            else
            {
                //"Not Registered"
                return Ok(ret);
            }
        }
        
        //FOR OTP Verification
        [HttpPost]
        public IHttpActionResult VerifyOTP(LoginModel model)
        {
            ret = userSer.OTPvalidate(model);
            if (ret.Id == 1)
            {
                //"Success,OTP Is Valid"
                return Ok(1);
            }
            else if(ret.Id==-1)
            {
                //"OTP Expired"
                return Ok(-1);
            }
            else
            {
                //"OTP/Email Is Invalid"
                return Ok(-2);
            }
        }
        
        //FOR Resend OTP 
        [HttpPost]
        public IHttpActionResult ResendOTP(LoginModel model)
        {
            ret = userSer.ResendOTP(model);
            if (ret.Id == 1 && ret.Message == "Sent")
            {
                //"Success,OTP Is Sent Again"
                return Ok(1);
            }
            else
            {
                //"OTP Is Not Sent"
                return Ok(-1);
            }
        }
        
        //FOR Showing Balance
        [HttpGet]
        public IHttpActionResult ShowBalance(int AccountId)
        {
            //int AccountId = 3;
            long val = userSer.Balance(AccountId);

            if (val != -1)
            {
                return Ok(val);
            }
            else
            {
                //Token Expired
                return BadRequest("Error");
            }
        }

        //FOR Showing Personal Details
        [HttpGet]
        public IHttpActionResult CheckDetails(int AccountId)
        {
            //int AccountId = 3;
            details = userSer.DetailsCheck(AccountId);

            if (details != null)
            {
                return Ok(details);
            }
            else
            {
                //Token expired
                return BadRequest("Error");
            }
        }
        
        //FOR Adding Money
        [HttpPost]
        public IHttpActionResult AddMoney( MoneyModel money)
        {
            //int AccountId = 3;
            //money.AddBalance = 150;
            ret = userSer.MoneyAdd(money);
            if (ret.Id >= 1)
            {
                //"Money added successfully"
                return Ok(1);
            }
            else if(ret.Id==-500)
            {
                //Token Expired
                return BadRequest("Error");
            }
            else
            {
                //"Money can't be added"
                return Ok("Error");
            }
        }
               
        //FOR Checking AccountNo and Email
        [HttpPost]
        public IHttpActionResult CheckAccAndEmail(MoneyModel money)
        { 
            ret = userSer.CheckCredential(money); 
            if (ret.Id==1)
            {
                //"Account no. found and Isverified"
                return Ok(1);
            }
            else if (ret.Id == -1)
            {
                //"Account no. found but it is not verified"
                return Ok(-1);
            }
            else
            {
                //"Account no. not found"
                return Ok(-2);
            }
        }
        
        //FOR Checking Balance in account
        [HttpPost]
        public IHttpActionResult CheckACCBal(MoneyModel money) 
        {
            //long AccountId = 3;
            ret = userSer.CheckBal(money);
            if (ret.Id == 1)
            {
                //"Sufficient Balance"
                return Ok(1);
            }
            else if (ret.Id == -1)
            {
                //"Insufficient Balance"
                return Ok(-1);
            }
            else if (ret.Id == -500)
            {
                //"Token Expired"
                return Ok(-500);
            }
            else
            {
                return BadRequest("error");
            }
        }
        
        //FOR Sending Money
        [HttpPost]
        public IHttpActionResult SendMoney(MoneyModel money)
        {
            //long AccountId = 4;
            ret = userSer.MoneySend(money);

            if (ret.Id >= 1)
            {
                //"Money Sent Successfully"
                return Ok(1);
            }
            else if (ret.Id == -1)
            {
                //"Money Can't Be Sent Successfully"
                return Ok(-1);
            }
            else if(ret.Id==-2)
            {
                //"Sender Account Is Not Found"
                return Ok(-2);
            }
            else if (ret.Id == -500)
            {
                //"Token Expired"
                return BadRequest("Error");
            }
            else
            {
                //"Incorrect PIN"
                return Ok(-3);
            }
        }
        
        //FOR Showing Transaction History
        [HttpPost]
        public IHttpActionResult TransactionsHistory(ListModel lm)
        {
            //int AccountId = 3; 
            transaction = userSer.History(lm);

            if (transaction != null)
            {
                return Ok(transaction);
            }
            else
            {
                //Token Expired
                return BadRequest("Error");
            }
        }
        
        //FOR ForgotPassword where user enter its Email
        [HttpPost]
        public IHttpActionResult ForgotPassword(LoginModel model)
        {
            //int AccountId = 3; 
            ret = userSer.PasswordForgot(model);
            if (ret.Id == 1)
            {
                ret = userSer.SendLink(model);
                if (ret.Id == 1)
                {
                    return Ok("Success");
                }
                else
                {
                    //"Link Can't be send"
                    return Ok(-1);
                }
                
            }
            else if(ret.Id==-1)
            {
                //"User Not Registered"
                return Ok(-2);
            }
            else
            {
                return BadRequest("Error");
            }
        }
        
        //FOR ForgotPassword where user enter its New password and confirm password
        [HttpPost]
        public IHttpActionResult UpdatePassword(LoginModel model)
        {
            ret = userSer.PasswordUpdate(model);

            if (ret.Id== 1)
            {
                //"Password Updated"
                return Ok(ret);
            }
            else if(ret.Id==-1)
            {
                //"Link Expired"
                return Ok(ret);
            }
            else
            {
                return BadRequest("Error");
            }
        }

        //FOR Change Password where user enter its Current Password, New password and confirm password
        [HttpPost]
        public IHttpActionResult ChangePassword(ChangePasswordModel model)
        {
            ret = userSer.PasswordChange(model);

            if (ret.Id >= 1)
            {
                //"Password Updated"
                return Ok(1);
            }
            else if(ret.Id==-500)
            {
                //Link Expired Please Login Again
                return Ok(-500);
            }
            else
            {
                //Incorrect Current PIN
                return BadRequest("Error");
            }
        }

        //For deleting Account User
        [HttpPost]
        public IHttpActionResult DelAcc(int AccountId)
        {
            //int AccountId = 3;
            ret = userSer.AccDel(AccountId);

            if (ret.Id == 1)
            {
                return Ok("Success");
            }
            else
            {
                return BadRequest("Error");
            }
        }


        //For Checking Email And Send Otp To It For Transaction
        [HttpPost]
        public IHttpActionResult CheckAccountandSendOtp(string AccountNo)
        {
            ret = userSer.AccountAndOtp(AccountNo);
            if(ret.Id==1)
            {
                return Ok("Success");
            }
            else
            {
                //Account doesn't exist
                return Ok(-20);
            }
        }
            
        //For Transaction from E-Commerce to Bank
        [HttpPost]
        public IHttpActionResult CheckoutTransaction(MoneyModel money)
        {
            frame = userSer.CheckoutPay(money);

            if (frame.Id >= 1)
            {
                return Ok(frame);
            }
            else if(frame.Id==-100)
            {
                //"Insufficient Balance"
                return Ok(frame);
            }
            else if (frame.Id == -500)
            {
                //"Otp Expired"
                return Ok(frame);
            }
            else
            {
                //Invalid Otp
                return Ok(frame);
            }
        }
        
        //For Linking Bank Account to seller
        [HttpPost]
        public IHttpActionResult LinkBank(AccountModel model)             //In Front End
        {
            //int AccountId = 3;
            ret = userSer.LinkBank(model);

            if (ret.Id == 1)
            {
                //Bank Account Linked Successfully
                return Ok(ret);
            }
            else
            {
                return BadRequest("Error");
            }
        }
        
        //For Withdrawing Money To Seller's Bank Account
        [HttpPost]
        public IHttpActionResult WithdrawMoney(MoneyModel model) //Receiving AccountNo and Withdraw Amount
        {
            ret = userSer.MoneyWithdraw(model);

            if (ret.Id >= 1)
            {
                //Withdrawal Success
                return Ok(1);
            }
            else if(ret.Id==-1)
            {
                //Withdrawal UnSuccessfull
                return Ok(-1);
            }
            else
            {
                //Please,Check Your Account It Might Be Deleted
                return BadRequest("Error");
            }
        }


        //For cancellation of Transaction from E-Commerce to Banke
        [HttpPost]
        public IHttpActionResult CancelCheckoutTransaction(MoneyModel money)
        {
            ret = userSer.CancelCheckoutPay(money);

            if (ret.Id >= 1)
            {
                return Ok("Cancel");
            }
            else
            {
                //Error
                return BadRequest("Error");
            }
        }

        //For cancellation of Order from E-Commerce and initiating refund from bank
        [HttpPost]
        public IHttpActionResult InitiateRefund(RefundModel refund)
        {
            ret = userSer.RefundInitiate(refund);

            if (ret.Id >= 1)
            {
                return Ok("Success");
            }
            else
            {
                //Error
                return BadRequest("Error");
            }
        }



    }
}
