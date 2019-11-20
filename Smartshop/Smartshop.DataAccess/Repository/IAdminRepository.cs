using Smartshop.DataAccess.Entities;
using Smartshop.ViewModels.Models.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.DataAccess.Repository
{
    public interface IAdminRepository
    {
        Task<List<SellerDetails>> GetUnapprovedSellerList();
        Task ApproveSellerRequest(int SellerId);
        Task RejectSellerRequest(int SellerId);
        Task<List<MasterUserDetailsModel>> GetAllActivatedUsers();
        Task<List<MasterUserDetailsModel>> GetAllDeactivatedUsers();
        Task ActivateUserByMasterUserId(int MasterUserId);
        Task DeactivateUserByMasterUserId(int MasterUserId);
        List<Sellerpdfforadmin> SellerPdfForAdmin();
        List<Buyerpdfforadmin> GetBuyerPdfForAdmin();
    }
}
 