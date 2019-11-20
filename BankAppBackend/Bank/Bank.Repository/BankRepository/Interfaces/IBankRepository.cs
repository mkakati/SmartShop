using Bank.ViewModels.Models.Bank;
using System.Collections.Generic;

namespace Bank.Repository.BankRepository.Interfaces
{
    public interface IBankRepository
    {
        ReturnModel RegisterUserIntoDB(RegistrationModel reg);
        ReturnModel OTPSending(RegistrationModel reg);
        ReturnModel RegisteredUserFromDB(LoginModel login);
        ReturnModel OTPVerify(LoginModel login);
        ReturnModel OTPResend(LoginModel login);
        long ShowBalance(int AccountId);
        List<PersonalDetails> ShowDetails(int AccountId);
        ReturnModel AddMoney(MoneyModel money); 
        List<TransactionsModel> TransHistory(ListModel lm);
        ReturnModel SendMoney(MoneyModel money);
        ReturnModel CredentialCheck(MoneyModel money);
        ReturnModel Balcheck(MoneyModel money);
        ReturnModel ForgotPassword(LoginModel login);
        ReturnModel UpdatePassword(LoginModel login);
        ReturnModel ChangePassword(ChangePasswordModel model);
        ReturnModel LinkSending(LoginModel login); 
        ReturnModel DelAcc(int AccountId);
        ReturnModel CheckAccountandSendOtp(string AccountNo);
        IframeModel PayCheckout(MoneyModel money);
        ReturnModel CancelPayCheckout(MoneyModel money);
        ReturnModel BankLink(AccountModel model);
        ReturnModel WithdrawMoney(MoneyModel money);
        ReturnModel InitiateRefund(RefundModel refund);
    }
}
