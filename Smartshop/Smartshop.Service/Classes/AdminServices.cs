using Smartshop.DataAccess.Repository;
using Smartshop.Service.Interfaces;
using Smartshop.ViewModels.Models;
using Smartshop.ViewModels.Models.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.Service.Classes
{
    public class AdminServices : IAdminServices
    {
        private readonly IAdminRepository _repo;
        public AdminServices(IAdminRepository repo)
        {
            _repo = repo;
        }

        public async Task<ApiResponse> ApproveSellerRequestBySellerId(int SellerId)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                await _repo.ApproveSellerRequest(SellerId);
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

        public async Task<ApiResponse> GetAllSellerApproveRequest()
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var sellerlist = await _repo.GetUnapprovedSellerList();
                res.StatusCode = 200;
                res.Message = "Success";
                res.data = sellerlist;
            }
            catch(Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }

        public async Task<ApiResponse> RejectSellerRequestBySellerId(int SellerId)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                await _repo.RejectSellerRequest(SellerId);
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

        public async Task<ApiResponse> GetAllActivatedUsers()
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var user=await _repo.GetAllActivatedUsers();
                res.StatusCode = 200;
                res.Message = "Success";
                res.data = user;
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }
        public async Task<ApiResponse> GetAllDeactivatedUsers()
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var user = await _repo.GetAllDeactivatedUsers();
                res.StatusCode = 200;
                res.Message = "Success";
                res.data = user;
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }

        public async Task<ApiResponse> ActivateUserByMasterUserId(int MasterUserId)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                await _repo.ActivateUserByMasterUserId(MasterUserId);
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

        public async Task<ApiResponse> DeactivateUserByMasterUserId(int MasterUserId)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                await _repo.DeactivateUserByMasterUserId(MasterUserId);
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
        public List<Sellerpdfforadmin> GetSellerPdfForAdmin()
        {
            List<Sellerpdfforadmin> myreport = _repo.SellerPdfForAdmin();
            return myreport;
        }
        public List<Buyerpdfforadmin> GetBuyerPdfForAdmin()
        {
            List<Buyerpdfforadmin> myreport = _repo.GetBuyerPdfForAdmin();
            return myreport;
        }
    }
}
