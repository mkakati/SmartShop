using Smartshop.DataAccess.Entities;
using Smartshop.ViewModels.Models.Buyer;
using Smartshop.ViewModels.Models.Product;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Smartshop.DataAccess.Repository
{
    public interface IBuyerRepository
    {
        Task AddCartItems(CartItem model);
        Task UpdateCartItems(int UserId, int ProductId,int Quantity);
        Task DeactiveCartItems(int UserId);
        Task<List<CartDetailModel>> GetCartDetailsByUserId(int UserId);
        Task <List<MyOrdersModel>> GetMyOrdersByUserId(int UserId);
        Task<List<OrderDetailsModel>> GetOrderDetailsByOrderId(int OrderId);
        Task<List<ProductModel>> GetRecentProducts();
        Task<Order> CreateOrder(Order order);
        Task CreateOrderMaster(OrdersMaster order);
        Task<bool> CheckExistingCartItems(int UserId, int ProductId);
        Task DeleteCartItemByCartId(DeleteCartModel model);
        Task EmptyCart(int UserId);
        DataModel TransactionData(DataModel data);
        Task<List<SearchModel>> ProductSearch(string searchstring);
        List<Buyerpdfmodel> GenerateBuyerPdf(int userid);
        Task<int> CartTotal(int userid);
        Task<DetailsAfterPayment> Details(DetailsAfterPayment details,int UserId);
        Task AddTempCartProducts(TempCartItem model);

        Task<List<DetailsAfterPayment>> Getdetails(int orderid);
        Task GetCartDataFromTemp(int userid, CartToTempModel model);

        List<CartDetailModel> GetCartDataWithoutLogin(string tempId);
        int GetCartQuantityWithoutLogin(string tempuserid);

        Task EmptyTempCart(string tempuserid);
        Task DeleteTempCartItem(int cartitemsid, string tempuserid);
        Task CancelOrderItem(int OrderMasterId, int masteruserid);
        Task<List<MyProfile>> MyProfile(int MasterUserId);
    }
}
