using Smartshop.DataAccess.Entities;
using Smartshop.ViewModels.Models;
using Smartshop.ViewModels.Models.Buyer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.Service.Interfaces
{
    public interface IBuyerServices
    {
        Task<ApiResponse> AddCartItems(AddCartModel model);
        Task<ApiResponse> ViewCartItems(int MasterUserId);

        Task<ApiResponse> GetAllOrders(int MasterUserId);
      

        Task<ApiResponse> GetOrderDetails(int OrderId);
        Task<ApiResponse> GetRecentProducts();
        Task<ApiResponse> PlaceOrder(PlaceOrderModel model);
        Task<ApiResponse> DeleteCartItems(DeleteCartModel model);
        Task<ApiResponse> EmptyCart(int MasterUserId);
        Task<ApiResponse> GetCartTotal(int MasterUserId);
        DataModel DataTransaction(DataModel data);
        Task<ApiResponse> SearchProducts(string searchstring);
        Task<List<Buyerpdfmodel>> GeneratePdf(int userid);
        Task<ApiResponse> GetCartTotalItem(int userid);
        Task<ApiResponse> Details(DetailsAfterPayment details);
        Task<ApiResponse> AddTemporaryCartItems(TempCartItem model);
        Task<ApiResponse> GetDetails(int orderid);
        Task<ApiResponse> GetCartDataFromTemp(CartToTempModel model);
        ApiResponse GetCartDataWithoutLogin(string tempId);

        ApiResponse GetCartQuantityWithoutLogin(string tempuserid);
        Task<ApiResponse> EmptyTempCart(string tempuserid);
        Task<ApiResponse> DeleteTempCartItem(int cartitemsid, string tempuserid);
        Task<ApiResponse> CancelOrderItem(int OrderMasterId, int masteruserid);
        Task<ApiResponse> MyProfile(int MasterUserId);
    }
}
