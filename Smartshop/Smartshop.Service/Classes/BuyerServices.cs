using Smartshop.DataAccess.Entities;
using Smartshop.DataAccess.Repository;
using Smartshop.Service.Interfaces;
using Smartshop.ViewModels.Models;
using Smartshop.ViewModels.Models.Buyer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.Service.Classes
{
    public class BuyerServices : IBuyerServices
    {
        private readonly IAuthRepository _auth;
        private readonly IBuyerRepository _buyer;
        public BuyerServices(IAuthRepository auth, IBuyerRepository buyer)
        {
            _auth=auth;
            _buyer = buyer;
        }
        public async Task<ApiResponse> AddCartItems(AddCartModel model)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var user =await _auth.GetUserByMasterId(model.MasterUserId);
                var checkexist=await _buyer.CheckExistingCartItems(user.UserId, model.ProductId);
                if (checkexist)
                {
                    await _buyer.UpdateCartItems(user.UserId, model.ProductId,model.Quantity);
                }
                else
                {
                    await _buyer.AddCartItems(new CartItem()
                    {
                        UserId = user.UserId,
                        ProductId = model.ProductId,
                        Quantity = model.Quantity.ToString(),
                        IsActive=true,
                        IsDeleted=false,
                        ModifiedBy=model.MasterUserId.ToString(),
                        CreatedBy=model.MasterUserId.ToString(),
                        ModifiedDate=DateTime.Now,
                        CreatedDate=DateTime.Now
                    });
                }
                res.StatusCode = 200;
                res.Message = "Product added to Cart";
                res.data = null;
            }
            catch(Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }

        public async Task<ApiResponse> ViewCartItems(int MasterUserId)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var user=await _auth.GetUserByMasterId(MasterUserId);
                List<CartDetailModel> cartitem=await _buyer.GetCartDetailsByUserId(user.UserId);
                res.StatusCode = 200;
                res.Message = "Success";
                res.data = cartitem;
            }
            catch(Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }

        public async Task<ApiResponse> GetAllOrders(int MasterUserId)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var orders = await _auth.GetUserByMasterId(MasterUserId);
                List<MyOrdersModel> myOrders = await _buyer.GetMyOrdersByUserId(orders.UserId);
                response.StatusCode = 200;
                response.Message = "Success";
                response.data = myOrders;
            }
            catch(Exception ex)
            {
                response.StatusCode = 400;
                response.Message = ex.Message;
                response.data = null;
                
            }
            return response;
        }

        public async Task<ApiResponse> GetOrderDetails(int OrderId)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                List<OrderDetailsModel> orderDetails = await _buyer.GetOrderDetailsByOrderId(OrderId);
                response.StatusCode = 200;
                response.Message = "Success";
                response.data = orderDetails;

            }
            catch (Exception ex)
            {
                response.StatusCode = 400;
                response.Message = ex.Message;
                response.data = null;
            }
            return response;
        }

        public async Task<ApiResponse> GetRecentProducts()
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var products=await _buyer.GetRecentProducts();
                res.StatusCode = 200;
                res.Message = "Success";
                res.data = products;

            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }

        public async Task<ApiResponse> PlaceOrder(PlaceOrderModel model)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                double? totalamount = 0;
                var buyer = await _auth.GetUserByMasterId(model.MasterUserId);
                var cartitems=await _buyer.GetCartDetailsByUserId(buyer.UserId);
                foreach(var cart in cartitems)
                {
                    totalamount += cart.UnitPrice * Convert.ToDouble(cart.Quantity);
                }
                var order=await _buyer.CreateOrder(new Order()
                {
                    TotalAmount=totalamount.ToString(),
                    OrderStatus="Pending",
                    PaymentStatus="Pending",
                    OrderDate=DateTime.Now.ToString(),
                    IsActive=true,
                    IsDeleted=false,
                    UserId=buyer.UserId,
                    ModifiedBy=model.MasterUserId.ToString(),
                    CreatedBy=model.MasterUserId.ToString(),
                    CreatedDate=DateTime.Now,
                    ModifiedDate=DateTime.Now,
                    AddressId=model.AddressId
                });
                foreach(var cartitem in cartitems)
                {
                    await _buyer.CreateOrderMaster(new OrdersMaster()
                    {
                        Quantity=Convert.ToInt32(cartitem.Quantity),
                        Amount= cartitem.UnitPrice * Convert.ToDouble(cartitem.Quantity),
                        IsDisbursed=false,
                        IsActive=true,
                        IsDeleted=false,
                        CreatedBy=model.MasterUserId.ToString(),
                        ModifiedBy=model.MasterUserId.ToString(),
                        CreatedDate=DateTime.Now,
                        ModifiedDate=DateTime.Now,
                        OrderId=order.OrderId,
                        ProductId=cartitem.ProductId,
                        StatusFlag=0
                    });
                }
              //  await _buyer.DeactiveCartItems(buyer.UserId);
                res.StatusCode = 200;
                res.Message = "Success";
                res.data = new {
                    OrderId =order.OrderId,
                    TotalAmount=order.TotalAmount
                };
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }

        public async Task<ApiResponse> DeleteCartItems(DeleteCartModel model)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                await _buyer.DeleteCartItemByCartId(model);
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

        public async Task<ApiResponse> EmptyCart(int MasterUserId)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var buyer = await _auth.GetUserByMasterId(MasterUserId);
                await _buyer.EmptyCart(buyer.UserId);
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

        public async Task<ApiResponse> GetCartTotal(int MasterUserId)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                double? totalamount = 0;
                var buyer = await _auth.GetUserByMasterId(MasterUserId);
                var cartitems = await _buyer.GetCartDetailsByUserId(buyer.UserId);
                foreach (var cart in cartitems)
                {
                    totalamount += cart.UnitPrice * Convert.ToDouble(cart.Quantity);
                }
                res.StatusCode = 200;
                res.Message = "Success";
                res.data = new { TotalAmount = totalamount };
            }
            catch(Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }
        public DataModel DataTransaction(DataModel data)
        {
            return _buyer.TransactionData(data);
        }

        public async Task<ApiResponse> SearchProducts(string searchstring)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                List<SearchModel> data = await _buyer.ProductSearch(searchstring);
                res.StatusCode = 200;
                res.Message = "Success";
                res.data = data;
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
            }
            return res;
        }

        public async Task<List<Buyerpdfmodel>> GeneratePdf(int userid)
        {
            var buyer = await _auth.GetUserByMasterId(userid);
            List<Buyerpdfmodel> mylist = _buyer.GenerateBuyerPdf(buyer.UserId);
            return mylist;
        }
        public async Task<ApiResponse> GetCartTotalItem(int userid)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var user = await _auth.GetUserByMasterId(userid);
                 var data=await _buyer.CartTotal(user.UserId);
                res.data = data;
                res.StatusCode = 200;
                res.Message = "Success";
            }
            catch(Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
            }
            return res;
        }
      
        public async Task<ApiResponse>  Details(DetailsAfterPayment details)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var buyer = await _auth.GetUserByMasterId(details.masterid);
                var data = await _buyer.Details(details,buyer.UserId);
                //await _buyer.DeactiveCartItems(buyer.UserId);
                response.StatusCode = 200;
                response.Message = "Success";
                response.data = data;
            }
            catch (Exception ex)
            {
                response.StatusCode = 400;
                response.Message = ex.Message;

            }
            return response;
        }

       
        public async Task<ApiResponse> GetDetails(int orderid)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                List<DetailsAfterPayment> data= await _buyer.Getdetails(orderid);
                response.StatusCode = 200;
                response.Message = "Success";
                response.data = data;
            }
            catch(Exception ex)
            {
                response.StatusCode = 400;
                response.Message = ex.Message;
            }
            return response;
        }

        public async Task<ApiResponse> AddTemporaryCartItems(TempCartItem model)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                await _buyer.AddTempCartProducts(model);
                res.StatusCode = 200;
                res.Message = "Success";
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
            }
            return res;
        }
       

        public async Task<ApiResponse> GetCartDataFromTemp(CartToTempModel model)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var User = await _auth.GetUserByMasterId(model.MasterUserId);
                await _buyer.GetCartDataFromTemp(User.UserId, model);
                res.StatusCode = 200;
                res.Message = "Success";
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
            }
            return res;
        }
       public ApiResponse GetCartDataWithoutLogin(string tempId)
        {
            ApiResponse res = new ApiResponse();
            try
            {               
                List<CartDetailModel> result= _buyer.GetCartDataWithoutLogin(tempId);
                res.data = result;
                res.StatusCode = 200;
                res.Message = "Success";
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
            }
            return res;
        }
        public ApiResponse GetCartQuantityWithoutLogin(string tempuserid)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var data =  _buyer.GetCartQuantityWithoutLogin(tempuserid);
                res.data = data;
                res.StatusCode = 200;
                res.Message = "Success";
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
            }
            return res;
        }
        public async Task<ApiResponse> EmptyTempCart(string tempuserid)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                await _buyer.EmptyTempCart(tempuserid);
                res.data = null;
                res.StatusCode = 200;
                res.Message = "Success";
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
            }
            return res;
        }

        public async Task<ApiResponse> DeleteTempCartItem(int cartitemsid, string tempuserid)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                await _buyer.DeleteTempCartItem(cartitemsid,tempuserid);               
                res.StatusCode = 200;
                res.Message = "Success";
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
            }
            return res;
        }
        public async Task<ApiResponse> CancelOrderItem(int OrderMasterId, int masteruserid)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                await _buyer.CancelOrderItem(OrderMasterId,masteruserid);
                res.StatusCode = 200;
                res.Message = "Success";
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
            }
            return res;
        }
        public async Task<ApiResponse> MyProfile(int MasterUserId)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                List<MyProfile> result = await _buyer.MyProfile(MasterUserId);
                res.data = result;
                res.StatusCode = 200;
                res.Message = "Success";
            }
            catch (Exception ex)
            {
                res.data = null;
                res.Message = ex.Message;
                res.StatusCode = 400;
            }
            return res;
        }
    }
}
