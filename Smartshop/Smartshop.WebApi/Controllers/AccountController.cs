using Smartshop.Service.Interfaces;
using Smartshop.ViewModels.Models;
using Smartshop.WebApi.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Smartshop.WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AccountController : ApiController
    {
        private readonly IAccountServices _account;
        public AccountController(IAccountServices account)
        {
            _account = account;
        }

        [HttpPost]
        public async Task<ApiResponse> RegisterSeller(RegisterSellerModel model)
        {
            return await _account.RegisterSeller(model);
        }
        [HttpPost]
        public async Task<ApiResponse> RegisterBuyer(RegisterUserModel model)
        {
            return await _account.RegisterBuyer(model);
        }

        [HttpPost]
        public async Task<ApiResponse> LoginBuyer(LoginUserModel model)
        {
            return await _account.LoginBuyer(model);
        }

        [HttpPost]
        public async Task<ApiResponse> LoginSeller(LoginUserModel model)
        {
            return await _account.LoginSeller(model);
        }

        [HttpPost]
        public async Task<ApiResponse> BuyerToSeller(BuyertoSellerModel model)
        {
            model.MasterUserId = User.Identity.GetMasterUserId();
            return await _account.BuyerToSeller(model);
        }

        [HttpPost]
        public async Task<ApiResponse> SellerToBuyer()
        {
            var MasterUserId=User.Identity.GetMasterUserId();
            return await _account.SellerToBuyer(MasterUserId);
        }
        [HttpPost]
        public async Task<ApiResponse> VerifyOtp(VerifyUserModel model)
        {
            model.MasterUserId= User.Identity.GetMasterUserId();
            return await _account.VerifyOtp(model);
        }
        [HttpPost]
        public async Task<ApiResponse> ForgetPassword(ForgetPasswordModel model) 
        {
            return await _account.ForgetPassword(model.Email);
        }
        [HttpPost]
        public async Task<ApiResponse> ResetPasswordByToken(ResetPasswordModel model)
        {
            return await _account.ResetPasswordByToken(model);
        }

        [HttpPost]
        public async Task<ApiResponse> AdminLogin(LoginUserModel model)
        {
            return await _account.AdminLogin(model);
        }
        [HttpPost]
        public async Task<ApiResponse> ChangePassword(ChangePasswordModel model)
        {
            model.MasterUserId = User.Identity.GetMasterUserId();
            return await _account.ChangePassword(model);
        }
        [HttpPost]
        public async Task<ApiResponse> ResendOtp()
        {
            ResendOtp resend = new ResendOtp();
            resend.MasterUserId = User.Identity.GetMasterUserId();
            return await _account.ResendOtp(resend);
        }
    }
}   