using Smartshop.DataAccess.Entities;
using Smartshop.ViewModels.Models;
using Smartshop.ViewModels.Models.Seller;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Smartshop.DataAccess.Repository.SellerRepo
{
    public interface ISellerRepository
    {
        List<ProductViewModel> GetAllProducts(int sellerid);
        ApiResponse RegisterNewProducts(ProductViewModel model);
        ApiResponse Saveimg(int productId, string imageName);
        ApiResponse ChangeProductDetails( ProductViewModel model);
        ApiResponse RemoveProduct(int productid);
        List<Incomingorders> Sellerorders(int sellerid);
        //List<SellerReport> ReportGeneration(int sellerid);
        List<ExcelReportModel> ExcelReportGeneration(int sellerid);
        Task<double> GetAmountForWithdrawl(int SellerId);
        ApiResponse NewStatus(StatusModel model);
        List<SaleHistoryModel> Sale(int sellerid);
        ApiResponse PostAccountId(int AccountId, int masteruserid);
        List<SellerReport> Pdf(int sellerid);
        Task<Int64> LinkWithAccountId(int masteruserid);
        Task<ApiResponse> UnlinkBankAccount(int sellerid);
        Task<ApiResponse> ChangeDisbursedVal(int sellerid);
        ApiResponse InsertCategory(int masteruserid, Category model);
        ApiResponse InsertSubCategory(int masteruserid, SubCategory model);
    }
}
