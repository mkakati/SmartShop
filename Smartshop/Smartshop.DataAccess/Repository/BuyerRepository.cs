using Smartshop.DataAccess.Entities;
using Smartshop.DataAccess.Helpers;
using Smartshop.ViewModels.Models.Buyer;
using Smartshop.ViewModels.Models.Product;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Smartshop.DataAccess.Repository
{
    public class BuyerRepository:IBuyerRepository
    {
        private readonly sdirecttestdbEntities _db=new sdirecttestdbEntities();
        public async Task AddCartItems(CartItem model)
        {
            _db.CartItems.Add(model);
            await _db.SaveChangesAsync();
        }

        public async Task<List<CartDetailModel>> GetCartDetailsByUserId(int UserId)
        {
            List<CartDetailModel> results =await _db.CartItems.Where(x => x.UserId == UserId && x.IsActive==true && x.IsDeleted==false).Select(s=>new CartDetailModel() {
                CartId=s.CartItemsId,
                ProductId=s.ProductId,
                Quantity=s.Quantity,
                ProductName=s.Product.ProductName,
                UnitPrice=s.Product.UnitPrice,
                SellerId= s.Product.SellerId,
                Stock=s.Product.Stock,
                SubCategoryId= s.Product.SubCategoryId
            }).ToListAsync();
            if (results.Count() == 0)
            {
                throw new Exception("Cart Empty");
            }

            foreach(var result in results)
            {
                var item = await _db.ProductImages.FirstOrDefaultAsync(s=>s.ProductId==result.ProductId);

                if (item != null)
                {
                    result.ImageUrl = item.ImageUrl.ConvertThumbToBase64();
                }
                if (Convert.ToInt32(result.Quantity) <= Convert.ToInt32(result.Stock))
                {
                    result.InStock = true;
                }
                else
                {
                    result.InStock = false;
                }
            }
            return results;
        }
        public async Task<List<MyOrdersModel>> GetMyOrdersByUserId(int UserId)
        {
            List<MyOrdersModel> myOrders = await _db.Orders.Where(x => x.UserId == UserId & x.IsDeleted == false).Select(s => new MyOrdersModel()
            {
                TotalAmount=s.TotalAmount,
                OrderId = s.OrderId,
                OrderDate = s.OrderDate,
                OrderStatus = s.OrderStatus,
                PaymentStatus = s.PaymentStatus,
                DeliveryDate = s.DeliveryDate
                
            }).ToListAsync();
            if(myOrders.Count() == 0)
            {
                throw new Exception("Order not found");
            }
            return myOrders;
        }
        public async Task<List<OrderDetailsModel>> GetOrderDetailsByOrderId(int OrderId)
        {
            List<OrderDetailsModel> mylist = new List<OrderDetailsModel>();
            mylist = (from i in _db.ProductImages
                      join
                      p in _db.Products on i.ProductId equals p.ProductId
                      join
                      om in _db.OrdersMasters on p.ProductId equals om.ProductId
                      join
                      order in _db.Orders on om.OrderId equals order.OrderId
                      join a in _db.Addresses on order.AddressId equals a.AddressId
                      where om.OrderId == OrderId
                      select new OrderDetailsModel
                      {
                          OrdersMasterId = om.OrdersMasterId,
                          OrderId=order.OrderId,
                          TransactionId=order.TransactionId,
                          PaymentStatus=order.PaymentStatus,
                          Address = a.FlatNo + "," + " " + a.AddressLine1 + "," + " " + a.AddressLine2 + "," + " " + a.City + "," + " " + a.State,
                          Quantity = om.Quantity,
                          OrderDate = order.OrderDate,
                          st = om.StatusFlag,
                          ProductId = p.ProductId,
                          ProductName = p.ProductName,
                          UnitPrice = p.UnitPrice,
                          ImageUrl = i.ImageUrl,
                          DeliveryDate = order.DeliveryDate
                      }).AsEnumerable().Select(x => new OrderDetailsModel
                      {
                          OrdersMasterId=x.OrdersMasterId,
                          OrderId=x.OrderId,
                          TransactionId=x.TransactionId,
                          PaymentStatus=x.PaymentStatus,
                          Quantity = x.Quantity,
                          OrderDate = x.OrderDate,
                          DeliveryDate = x.DeliveryDate,
                          ProductId = x.ProductId,
                          ProductName = x.ProductName,
                          UnitPrice = x.UnitPrice,
                          ImageUrl = x.ImageUrl,
                          Address=x.Address,
                          Statusflag = StatusCheck(x.st).ToString()
                      }).ToList();
            foreach (var list in mylist)
            {
                list.ImageUrl = list.ImageUrl.ConvertThumbToBase64();
            }
            return mylist;
        }


        public async Task<List<ProductModel>> GetRecentProducts()
        {
            //var products= await _db.Products.Join(_db.ProductImages, // the source table of the inner join
            //  prod => prod.ProductId,        // Select the primary key (the first part of the "on" clause in an sql "join" statement)
            //  prodimg => prodimg.ProductId,   // Select the foreign key (the second part of the "on" clause)
            //  (prod, prodimg) => new { Products = prod, ProductImages = prodimg })
              
              
              // selection

            var pro=(from pi in _db.ProductImages join 
                          p in _db.Products on pi.ProductId equals p.ProductId join
                          s in _db.Sellers on p.SellerId equals s.SellerId
                          where  p.IsDeleted == false && s.IsApproved==true
                          orderby p.CreatedDate descending
                          select new ProductModel                                 
                          {
                             ProductId=p.ProductId,
                             ProductName=p.ProductName,
                             UnitPrice=p.UnitPrice,
                             Stock=p.Stock,
                             Description=p.Description,
                             SellerId=p.SellerId,
                             ImageUrl=pi.ImageUrl
                          }).Take(15).ToList();
            foreach(var product in pro)
            {
                product.ImageUrl = product.ImageUrl.ConvertThumbToBase64();
            }
           return pro;
        }

        public async Task<Order> CreateOrder(Order order)
        {
            var orders=_db.Orders.Add(order);
            await _db.SaveChangesAsync();
            return orders;
        }

        public async Task CreateOrderMaster(OrdersMaster order)
        {
            _db.OrdersMasters.Add(order);
            await _db.SaveChangesAsync();
        }

        public async Task<bool> CheckExistingCartItems(int UserId, int ProductId)
        {
            var existing = await _db.CartItems.FirstOrDefaultAsync(x => x.UserId == UserId && x.ProductId == ProductId && x.IsActive == true && x.IsDeleted == false);
            if (existing == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public async Task UpdateCartItems(int UserId, int ProductId, int Quantity)
        {
            var existing = await _db.CartItems.FirstOrDefaultAsync(x => x.UserId == UserId && x.ProductId == ProductId && x.IsActive == true && x.IsDeleted == false);
            if (existing != null)
            {
                existing.Quantity = (Convert.ToInt32(existing.Quantity) + Quantity).ToString();
            }
            await _db.SaveChangesAsync();
        }
        public async Task DeactiveCartItems(int UserId)
        {
            //var cartitems = await _db.CartItems.Join(_db.Orders, cUid => cUid.UserId, oUid => oUid.UserId,(cUid, oUid) => new {CartItems = cUid , Orders = oUid}).Where(x => x.UserId == UserId && x.IsActive == true && x.IsDeleted == false && cUid.CartItems.UserId == oUid.Orders.UserId).ToListAsync();
            var cartitems = await _db.CartItems.Where(x => x.UserId == UserId && x.IsDeleted == false && x.IsActive == true).ToListAsync();
            foreach(var cartitem in cartitems)
            {
                cartitem.IsActive = false;
                await _db.SaveChangesAsync();
            }
        }
        
        public async Task DeleteCartItemByCartId(DeleteCartModel model)
        {
            var cartitem = await _db.CartItems.FirstOrDefaultAsync(x => x.CartItemsId == model.CartId && x.IsActive == true && x.IsDeleted == false);
            if (cartitem != null)
            {
                cartitem.IsDeleted = true;
                cartitem.IsActive = false;
                cartitem.ModifiedBy = model.MasterUserId.ToString();
                cartitem.ModifiedDate = DateTime.Now;
            }
            await _db.SaveChangesAsync();
        }
        public async Task EmptyCart(int UserId)
        {
            var cartitems = await _db.CartItems.Where(x => x.UserId == UserId && x.IsActive == true && x.IsDeleted == false).ToListAsync();
            foreach(var cartitem in cartitems)
            {
                cartitem.IsDeleted = true;
                cartitem.IsActive = false;
                cartitem.ModifiedBy = UserId.ToString();
                cartitem.ModifiedDate = DateTime.Now;
                await _db.SaveChangesAsync();
            }           
        }
        public string StatusCheck(int? status)
        {
            switch (status)
            {
                case 0: return "Placed";
                case 1: return "Accepted";
                case 2: return "Failed";
                case 3: return "Rejected";
                case 4: return "Cancelled";
                case 5: return "Delivered";
                
                default: return "invalid";
            }
        }
        public DataModel TransactionData(DataModel data)
        {
            using (var db = new sdirecttestdbEntities())
            {
                var check = db.Transactions.OrderByDescending(x => x.OrderId == data.OrderId).FirstOrDefault(x => x.OrderId == data.OrderId && x.Debit == data.Amount);
                if (check != null)
                {
                    data.OrderId = check.OrderId;
                    data.TransactionId = check.TransactionId;
                    data.Amount = check.Debit;
                    data.Status = check.Status;
                    return data;
                }
                else
                {
                    var cancel = db.Orders.FirstOrDefault(y=>y.OrderId==data.OrderId);
                    if(cancel!=null)
                    {
                        data.OrderId = cancel.OrderId;
                        //data.TransactionId = check.TransactionId;
                        data.Amount = Convert.ToDouble(cancel.TotalAmount);
                        data.Status = cancel.PaymentStatus;
                        return data;
                    }
                    else
                    {
                        //Order not found
                        return null;
                    }

                }

            }
        }
        public async Task<List<SearchModel>> ProductSearch(string searchstring)
        {
            List<SearchModel> res = new List<SearchModel>();
            //var aa = _db.Products.Where(x => x.ProductName.Contains(searchstring) || x.ProductName.Contains(searchstring)).ToList();
            //var bb = _db.SubCategories.Where(x => x.SubCategoryName.Contains(searchstring) || x.SubCategoryName.Contains(searchstring)).ToList();
            //foreach (var item in aa)
            //{

            //}
            //foreach (var item in bb)
            //{

            //}
            res = (from pi in _db.ProductImages join

                   p in _db.Products on pi.ProductId equals p.ProductId
                   join
                    s in _db.SubCategories on p.SubCategoryId equals s.SubCategoryId
                   where p.ProductName.Contains(searchstring) || s.SubCategoryName.Contains(searchstring)
                   select new SearchModel
                   { ProductName = p.ProductName,
                       ProductId = p.ProductId,
                       UnitPrice = p.UnitPrice,
                       Description = p.Description,
                       ImageUrl = pi.ImageUrl,
                       SubCategoryName = s.SubCategoryName,
                       Stock = p.Stock
                   }).ToList();
            foreach (var result in res)
            {               
                    result.ImageUrl = result.ImageUrl.ConvertThumbToBase64();                
            }

            return res;

        }
        public async Task<DetailsAfterPayment> Details(DetailsAfterPayment details,int UserId)
        {
            var OrderId = Convert.ToInt32(details.OrderId);
            var ord = _db.Orders.FirstOrDefault(x => x.OrderId == OrderId);
            if (details.Message == "Success" )
            {
                ord.PaymentStatus = "Done";
                ord.TransactionId = details.TransactionId;
                await _db.SaveChangesAsync();
                var orderlist = await _db.OrdersMasters.Where(x => x.OrderId == OrderId && x.IsDeleted == false && x.IsActive == true).ToListAsync();
                foreach (var order in orderlist)
                {
                    order.Product.Stock = (Convert.ToInt32(order.Product.Stock) - Convert.ToInt32(order.Quantity)).ToString();
                    await _db.SaveChangesAsync();
                }
                await DeactiveCartItems(UserId);
            }
            else
            {
                ord.PaymentStatus = "Cancel by user";
                ord.TransactionId = details.TransactionId;
                await _db.SaveChangesAsync();
                var orderlist = await _db.OrdersMasters.Where(x => x.OrderId == OrderId && x.IsDeleted == false && x.IsActive == true).ToListAsync();
                foreach (var order in orderlist)
                {
                    order.StatusFlag =2;
                    await _db.SaveChangesAsync();
                }

            }

            return details;


        }


        public List<Buyerpdfmodel> GenerateBuyerPdf(int userid)
        {
            List<Buyerpdfmodel> result = (from p in _db.Products
                                          join
                                          o in _db.OrdersMasters on p.ProductId equals o.ProductId
                                          join
                                          order in _db.Orders on o.OrderId equals order.OrderId
                                          where order.UserId == userid
                                          select new Buyerpdfmodel
                                          {
                                              PaymentStatus = order.PaymentStatus,
                                              ProductName = p.ProductName,
                                              Quantity = o.Quantity,
                                              OrderDate = order.OrderDate,
                                              UserId = order.UserId,
                                              st = o.StatusFlag
                                          }).AsEnumerable().Select(x => new Buyerpdfmodel
                                          {
                                              PaymentStatus = x.PaymentStatus,
                                              ProductName = x.ProductName,
                                              Quantity = x.Quantity,
                                              OrderDate = x.OrderDate,
                                              UserId = x.UserId,
                                              StatusFlag = StatusCheck(x.st).ToString()
                                          }).ToList(); ;
            return result;
        }
        public async Task<int> CartTotal(int userid)
        {
            int Total=0;
            var res =await _db.CartItems.Where(x => x.UserId == userid && x.IsActive==true && x.IsDeleted==false).ToListAsync();
            foreach(var obj in res)
            {
              Total = Total+ Convert.ToInt32(obj.Quantity);
            }
            return Total;
        }

        public async Task AddTempCartProducts(TempCartItem model)
        {
            if (await CheckExistingTempCartItems(model.TempUserId, Convert.ToInt32(model.ProductId)))
            {
                await UpdateTempCartItems(model.TempUserId, Convert.ToInt32(model.ProductId), Convert.ToInt32(model.Quantity));
            }
            else
            {
                model.IsActive = true;
                model.IsDeleted = false;
                _db.TempCartItems.Add(model);
                await _db.SaveChangesAsync();
            }
        }

        public async Task<List<DetailsAfterPayment>> Getdetails(int orderid)
        {

            var result = (from p in _db.Products
                          join
                          om in _db.OrdersMasters on p.ProductId equals om.ProductId
                          join
                          order in _db.Orders on om.OrderId equals order.OrderId
                          join a in _db.Addresses on order.AddressId equals a.AddressId
                          where order.OrderId == orderid
                          select new DetailsAfterPayment
                          {
                              ProductName = p.ProductName,
                              Address = a.FlatNo+","+" "+a.AddressLine1+","+" "+ a.AddressLine2+","+" "+a.City+","+" "+a.State,
                              PIN=a.PIN,
                              AddressId = a.AddressId,
                              TotalAmount = order.TotalAmount,
                              PaymentStatus = order.PaymentStatus,
                              Quantity = om.Quantity
                          }).ToList();
            return result;
        }

       

        public async Task GetCartDataFromTemp(int userid, CartToTempModel model)
        {
            CartItem obj = new CartItem();
            List<TempCartItem> result= _db.TempCartItems.Where(x => x.IsDeleted == false && x.IsActive == true && x.TempUserId == model.TempUserId).ToList();
            foreach (var item in result)
            {
                var checkexist=await CheckExistingCartItems(userid, Convert.ToInt32(item.ProductId));
                if (checkexist)
                {
                    await UpdateCartItems(userid, Convert.ToInt32(item.ProductId), Convert.ToInt32(item.Quantity));
                }
                else
                {
                    obj.UserId = userid;
                    obj.Quantity = item.Quantity;
                    obj.IsActive = item.IsActive;
                    obj.IsDeleted = item.IsDeleted;
                    obj.CreatedDate = item.CreatedDate;
                    obj.ModifiedDate = item.ModifiedDate;
                    obj.CreatedBy = item.CreatedBy;
                    obj.ModifiedBy = item.ModifiedBy;
                    obj.ProductId = item.ProductId;
                    _db.CartItems.Add(obj);
                    _db.SaveChanges();
                }
                item.IsActive = false;
                item.IsDeleted = true;              
                _db.SaveChanges();
            }
        }

        

        public List<CartDetailModel> GetCartDataWithoutLogin(string tempId)
        {
            List<CartDetailModel> results = _db.TempCartItems.Where(x => x.TempUserId == tempId && x.IsActive == true && x.IsDeleted == false).Select(s => new CartDetailModel()
            {                
               
                ProductId = s.ProductId,
                Quantity = s.Quantity,
                ProductName = s.Product.ProductName,
                UnitPrice = s.Product.UnitPrice,
                SellerId = s.Product.SellerId,
                SubCategoryId = s.Product.SubCategoryId,
                Stock=s.Product.Stock
            }).ToList();
            if (results.Count() == 0)
            {
                throw new Exception("Cart Empty");
            }

            foreach (var result in results)
            {
                var item = _db.ProductImages.FirstOrDefault(s => s.ProductId == result.ProductId);

                if (item != null)
                {
                    result.ImageUrl = item.ImageUrl.ConvertThumbToBase64();
                }
                if (Convert.ToInt32(result.Quantity) <= Convert.ToInt32(result.Stock))
                {
                    result.InStock = true;
                }
                else
                {
                    result.InStock = false;
                }
            }
            return results;
        }

       public int GetCartQuantityWithoutLogin(string tempuserid)
        {
            int Total = 0;
            var res =  _db.TempCartItems.Where(x => x.TempUserId == tempuserid && x.IsActive == true && x.IsDeleted == false).ToList();
            foreach (var obj in res)
            {
                Total = Total + Convert.ToInt32(obj.Quantity);
            }
            return Total;
        }

        public async Task<bool> CheckExistingTempCartItems(string tempuserid, int ProductId)
        {
            var existing = await _db.TempCartItems.FirstOrDefaultAsync(x => x.TempUserId == tempuserid  && x.ProductId == ProductId && x.IsActive == true && x.IsDeleted == false);
            if (existing == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        public async Task UpdateTempCartItems(string tempuserid, int ProductId, int Quantity)
        {
            var existing = await _db.TempCartItems.FirstOrDefaultAsync(x => x.TempUserId == tempuserid && x.ProductId == ProductId && x.IsActive == true && x.IsDeleted == false);
            if (existing != null)
            {
                existing.Quantity = (Convert.ToInt32(existing.Quantity) + Quantity).ToString();
            }
            await _db.SaveChangesAsync();
        }
        public async Task EmptyTempCart(string tempuserid)
        {
            var data =  await _db.TempCartItems.Where(x => x.TempUserId == tempuserid && x.IsDeleted==false && x.IsActive==true).ToListAsync();
            foreach(var item in data)
            {
                item.IsDeleted = true;
                item.IsActive = false;
                await _db.SaveChangesAsync();
            }
        }
        public async Task DeleteTempCartItem( int cartitemsid,string tempuserid)
        {
            var data = await _db.TempCartItems.Where(x => x.ProductId == cartitemsid && x.TempUserId==tempuserid && x.IsDeleted == false && x.IsActive == true).ToListAsync();
            foreach (var item in data)
            {
                item.IsDeleted = true;
                item.IsActive = false;
                await _db.SaveChangesAsync();
            }
        }
        public async Task CancelOrderItem(int OrderMasterId, int masteruserid)
        {           
            var order=await _db.OrdersMasters.FirstOrDefaultAsync(x => x.OrdersMasterId== OrderMasterId && x.IsDeleted==false && x.IsActive==true && x.Order.User.MasterUserId==masteruserid);
            order.StatusFlag = 4;
            await _db.SaveChangesAsync();
        }

        public async Task<List<MyProfile>> MyProfile(int MasterUserId)
        {
            MyProfile obj = new MyProfile();
            List<MyProfile> list = new List<MyProfile>();
            var result = await _db.MasterUsers.Where(x => x.MasterUserId == MasterUserId).ToListAsync();
            foreach(var item in result)
            {
                obj.FirstName = item.FirstName; 
                obj.LastName = item.LastName;
                obj.Email = item.Email;
                obj.Mobile = item.Mobile;
            }
            list.Add(obj);
            return list;
        }
    }
}
