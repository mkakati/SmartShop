using Smartshop.ViewModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.Service.Interfaces
{
    public interface IAccountServices
    {
        Task<ApiResponse> RegisterBuyer(RegisterUserModel model);
        Task<ApiResponse> RegisterSeller(RegisterSellerModel model);
        Task<ApiResponse> LoginBuyer(LoginUserModel model);
        Task<ApiResponse> LoginSeller(LoginUserModel model);
        Task<ApiResponse> BuyerToSeller(BuyertoSellerModel model);
        Task<ApiResponse> SellerToBuyer(int MasterUserId);
        Task<ApiResponse> VerifyOtp(VerifyUserModel model);
        Task<ApiResponse> ForgetPassword(string Email);
        Task<ApiResponse> ResetPasswordByToken(ResetPasswordModel model);
        Task<ApiResponse> AdminLogin(LoginUserModel model);
        Task<ApiResponse> ChangePassword(ChangePasswordModel model);

        Task<ApiResponse> ResendOtp(ResendOtp resend);
    }
}
