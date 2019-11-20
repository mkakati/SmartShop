using Bank.ViewModels.Models.Bank;
using System.Collections.Generic;

namespace Bank.Service.BankService.Interfaces
{
    public interface IUserRegister
    {
        ReturnModel UserRegisterService(RegistrationModel reg);
        ReturnModel SendOTP(RegistrationModel reg);
        ReturnModel UserLoginService(LoginModel login);
        ReturnModel OTPvalidate(LoginModel login);
        ReturnModel ResendOTP(LoginModel login);
        long Balance(int AccountId);
        List<PersonalDetails> DetailsCheck(int AccountId);
        ReturnModel MoneyAdd(MoneyModel money);
        List<TransactionsModel> History(ListModel lm);
        ReturnModel MoneySend(MoneyModel money);
        ReturnModel CheckCredential(MoneyModel money);
        ReturnModel CheckBal(MoneyModel money);
        ReturnModel PasswordForgot(LoginModel login);
        ReturnModel SendLink(LoginModel login);
        ReturnModel PasswordUpdate(LoginModel login);
        ReturnModel AccDel(int AccountId);
        ReturnModel AccountAndOtp(string AccountNo); 
        IframeModel CheckoutPay(MoneyModel money);
        ReturnModel CancelCheckoutPay(MoneyModel money);
        ReturnModel LinkBank(AccountModel model); 
        ReturnModel MoneyWithdraw(MoneyModel money);
        //List<>PDF(AccountUserModel acc);
        ReturnModel PasswordChange(ChangePasswordModel model);
        ReturnModel RefundInitiate(RefundModel refund); 
    }
}
