using Smartshop.ViewModels.Models;
using Smartshop.ViewModels.Models.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.Service.Interfaces
{
    public interface IAdminServices
    {
        Task<ApiResponse> GetAllSellerApproveRequest();
        Task<ApiResponse> ApproveSellerRequestBySellerId(int SellerId);
        Task<ApiResponse> RejectSellerRequestBySellerId(int SellerId);
        Task<ApiResponse> GetAllActivatedUsers();
        Task<ApiResponse> GetAllDeactivatedUsers();
        Task<ApiResponse> ActivateUserByMasterUserId(int MasterUserId);
        Task<ApiResponse> DeactivateUserByMasterUserId(int MasterUserId);
        List<Sellerpdfforadmin> GetSellerPdfForAdmin();
        List<Buyerpdfforadmin> GetBuyerPdfForAdmin();

    }
}
