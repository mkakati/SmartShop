using Smartshop.DataAccess.Entities;
using Smartshop.ViewModels.Models;
using Smartshop.ViewModels.Models.Seller;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Smartshop.Service.Interfaces
{
    public interface ISellerServices
    {
        Task<ApiResponse> GetPro(int masteruserid);      
        Task<ApiResponse> Add(ProductViewModel model);
        ApiResponse Upload();
        ApiResponse UpdatePro( ProductViewModel model);
        ApiResponse DeletePro(int productid);
        Task<ApiResponse> Orders(int masteruserid);
        //ApiResponse Generatepdf(int sellerid);
        Task<ApiResponse> GetAmountForWithdrawl(int MasterUserId);
        Task<ApiResponse> GenerateExcelReports(int MasterUserId);
        ApiResponse ChangeStatus(StatusModel model);
        Task<ApiResponse> SaleHistory(int masteruserid);
        Task<ApiResponse> RegisterAccount(int AccountId, int masteruserid);
        Task<List<SellerReport>> GeneratePdf(int sellerid);

        Task<ApiResponse> LinkAccount(int masteruserid);
        Task<ApiResponse> Unlink(int masteruserid);
        Task<ApiResponse> Disbursed(int masteruserid);
        ApiResponse NewCategory(int masteruserid, Category model);
        ApiResponse NewSubCategory(int masteruserid, SubCategory model);
    }
}
