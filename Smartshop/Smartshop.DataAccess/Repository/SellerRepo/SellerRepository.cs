using Smartshop.DataAccess.Entities;
using Smartshop.ViewModels.Models;
using Smartshop.ViewModels.Models.Seller;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.IO;
using System.Threading.Tasks;
using System;
using Smartshop.DataAccess.Helpers;
using System.Web;


namespace Smartshop.DataAccess.Repository.SellerRepo
{
    public class SellerRepository : ISellerRepository
    {
        List<ProductViewModel> ISellerRepository.GetAllProducts(int masteruserid)
        {
            sdirecttestdbEntities db = new sdirecttestdbEntities();
            List<ProductViewModel> mylist = new List<ProductViewModel>();
            mylist = (from s in db.Sellers
                      join p in db.Products on s.SellerId equals p.SellerId
                      join i in db.ProductImages on p.ProductId equals i.ProductId
                      select new ProductViewModel
                      {
                          ProductId = p.ProductId,
                          ProductName = p.ProductName,
                          UnitPrice = p.UnitPrice,
                          Description = p.Description,
                          ImageUrl = i.ImageUrl,
                          Stock = p.Stock,
                          SellerId = s.SellerId,
                          IsDeleted = p.IsDeleted,
                          IsActive = p.IsActive
                      }).Where(x => x.SellerId == masteruserid && x.IsDeleted == false && x.IsActive == true).ToList();
            foreach (var list in mylist)
            {
                list.ImageUrl = list.ImageUrl.ConvertThumbToBase64();
            }
            return mylist;
        }

        ApiResponse ISellerRepository.RegisterNewProducts(ProductViewModel model)
        {
            ApiResponse obj = new ApiResponse();
            var ForProductTable = new Product
            {
                ProductName = model.ProductName,
                UnitPrice = model.UnitPrice,
                Description = model.Description,
                Stock = model.Stock,
                SellerId = model.SellerId,
                SubCategoryId = model.SubCategoryId,
                IsActive = true,
                IsDeleted = false,
                CreatedDate = System.DateTime.Now,
                ModifiedDate = System.DateTime.Now,
                CreatedBy = model.SellerId.ToString(),
                ModifiedBy = model.SellerId.ToString()
            };
            using (sdirecttestdbEntities db = new sdirecttestdbEntities())
            {
                db.Products.Add(ForProductTable);
                db.SaveChanges();
            }

            obj.StatusCode = 200;
            obj.Message = "Success";
            obj.data = ForProductTable.ProductId;
            return obj;
        }
        ApiResponse ISellerRepository.Saveimg(int productId, string imageName)
        {
            ApiResponse obj = new ApiResponse();
            var ForProductImgTable = new ProductImage
            {
                ImageUrl = imageName,
                ProductId = productId
            };
            using (sdirecttestdbEntities db = new sdirecttestdbEntities())
            {
                db.ProductImages.Add(ForProductImgTable);
                db.SaveChanges();
            }
            obj.StatusCode = 200;
            obj.Message = "Success";
            return obj;
        }

        //Update Product Details Api
        ApiResponse ISellerRepository.ChangeProductDetails(ProductViewModel model)
        {
            ApiResponse obj = new ApiResponse();
            using (sdirecttestdbEntities db = new sdirecttestdbEntities())
            {
                Product data = db.Products.Where(x => x.ProductId == model.ProductId).FirstOrDefault();

                if (data != null)
                {
                    data.ProductName = model.ProductName;
                    data.UnitPrice = model.UnitPrice;
                    data.Description = model.Description;
                    data.Stock = model.Stock;
                    db.SaveChanges();
                }
                obj.StatusCode = 200;
                obj.Message = "Success";
                return obj;
            }
        }

        ApiResponse ISellerRepository.RemoveProduct(int productid)
        {
            ApiResponse obj = new ApiResponse();
            using (sdirecttestdbEntities db = new sdirecttestdbEntities())
            {
                var con = db.Products.Where(x => x.ProductId == productid).FirstOrDefault();
                con.IsDeleted = true;
                con.IsActive = false;
                db.SaveChanges();
            }
            return obj;
        }

        List<Incomingorders> ISellerRepository.Sellerorders(int sellerid)
        {
            sdirecttestdbEntities db = new sdirecttestdbEntities();
            List<Incomingorders> incoming = new List<Incomingorders>();
            incoming = (from p in db.Products
                        join i in db.ProductImages on p.ProductId equals i.ProductId
                        join o in db.OrdersMasters on i.ProductId equals o.ProductId
                        join order in db.Orders on o.OrderId equals order.OrderId
                        join a in db.Addresses on order.AddressId equals a.AddressId
                        where p.SellerId == sellerid && o.StatusFlag != 5
                        select new Incomingorders
                        {
                            OrdersMasterId = o.OrdersMasterId,
                            OrderId = o.OrderId,
                            SellerId = p.SellerId,
                            ProductName = p.ProductName,
                            Description = p.Description,
                            Stock = p.Stock,
                            Quantity = o.Quantity,
                            Amount = o.Quantity * p.UnitPrice,
                            ImageUrl = i.ImageUrl,
                            st = o.StatusFlag,
                            OrderDate = order.OrderDate,
                            Address = a.FlatNo + "," + " " + a.AddressLine1 + "," + " " + a.AddressLine2 + "," + " " + a.City + "," + " " + a.State
                        }).AsEnumerable().Select(x => new Incomingorders
                        {
                            OrdersMasterId = x.OrdersMasterId,
                            OrderId = x.OrderId,
                            SellerId = x.SellerId,
                            ProductName = x.ProductName,
                            Description = x.Description,
                            Stock = x.Stock,
                            Quantity = x.Quantity,
                            Amount = x.Amount,
                            ImageUrl = x.ImageUrl,
                            Address = x.Address,
                            OrderDate = x.OrderDate,
                            StatusFlag = StatusCheck(x.st).ToString()
                        }).ToList();

            foreach (var list in incoming)
            {
                list.ImageUrl = list.ImageUrl.ConvertThumbToBase64();
            }

            return incoming;
        }


        List<ExcelReportModel> ISellerRepository.ExcelReportGeneration(int sellerid)
        {
            sdirecttestdbEntities db = new sdirecttestdbEntities();
            var report = db.OrdersMasters.Where(x => x.Product.SellerId == sellerid).Select(s => new ExcelReportModel()
            {
                OrderId = s.OrderId,
                ProductId = s.ProductId,
                ProductName = s.Product.ProductName,
                Quantity = s.Quantity,
                Amount = s.Amount,
                SellerId = s.Product.SellerId,
                Status = s.StatusFlag
            }).ToList();
            return report;
        }
        public async Task<double> GetAmountForWithdrawl(int SellerId)
        {
            sdirecttestdbEntities db = new sdirecttestdbEntities();
            var amount = db.OrdersMasters.Where(x => x.Product.Seller.SellerId == SellerId && x.IsDisbursed == false && x.StatusFlag == 5).Select(s => s.Amount).Sum();
            return Convert.ToDouble(amount);
        }


        ApiResponse ISellerRepository.NewStatus(StatusModel model)
        {
            ApiResponse obj = new ApiResponse();
            sdirecttestdbEntities db = new sdirecttestdbEntities();
            OrdersMaster orders = db.OrdersMasters.Where(x => x.OrdersMasterId == model.OrdersMasterId).First();
            orders.StatusFlag = model.StatusFlag;
            db.SaveChanges();
            return obj;
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
        List<SaleHistoryModel> ISellerRepository.Sale(int sellerid)
        {
            sdirecttestdbEntities db = new sdirecttestdbEntities();
            List<SaleHistoryModel> mylist = new List<SaleHistoryModel>();
            mylist = (from p in db.Products
                      join
o in db.OrdersMasters on p.ProductId equals o.ProductId
                      join
order in db.Orders on o.OrderId equals order.OrderId
                      where p.SellerId == sellerid && o.StatusFlag == 5
                      select new SaleHistoryModel
                      {
                          ProductName = p.ProductName,
                          Quantity = o.Quantity,
                          TotalAmount = order.TotalAmount,
                          OrderDate = order.OrderDate,
                          DeliveryDate = order.DeliveryDate,
                          OrderId = o.OrderId,
                          SellerId = p.SellerId,
                          st = o.StatusFlag
                      }).AsEnumerable().Select(x => new SaleHistoryModel
                      {
                          ProductName = x.ProductName,
                          Quantity = x.Quantity,
                          TotalAmount = x.TotalAmount,
                          OrderDate = x.OrderDate,
                          DeliveryDate = x.DeliveryDate,
                          OrderId = x.OrderId,
                          SellerId = x.SellerId,
                          StatusFlag = StatusCheck(x.st).ToString()
                      }).ToList();
            return mylist;
        }

        ApiResponse ISellerRepository.PostAccountId(int AccountId, int masteruserid)
        {
            ApiResponse obj = new ApiResponse();
            sdirecttestdbEntities db = new sdirecttestdbEntities();
            Seller data = db.Sellers.Where(x => x.SellerId == masteruserid).First();
            data.AccountId = AccountId;
            db.SaveChanges();
            return obj;
        }

        List<SellerReport> ISellerRepository.Pdf(int sellerid)
        {
            sdirecttestdbEntities db = new sdirecttestdbEntities();
            List<SellerReport> result = (from p in db.Products
                                         join
                   o in db.OrdersMasters on p.ProductId equals o.ProductId
                                         where p.IsDeleted == false && p.SellerId == sellerid
                                         select new SellerReport
                                         {
                                             ProductId = p.ProductId,
                                             ProductName = p.ProductName,
                                             Quantity = o.Quantity,
                                             Amount = o.Amount
                                             // SellerId = p.SellerId
                                         }).ToList();
            return result;
        }

        async Task<Int64> ISellerRepository.LinkWithAccountId(int masteruserid)
        {
            ApiResponse obj = new ApiResponse();
            sdirecttestdbEntities db = new sdirecttestdbEntities();
            var result = db.Sellers.Where(x => x.MasterUserId == masteruserid).Select(x => x.AccountId).First();
            return Convert.ToInt64(result);
        }
        async Task<ApiResponse> ISellerRepository.UnlinkBankAccount(int sellerid)
        {
            sdirecttestdbEntities db = new sdirecttestdbEntities();
            ApiResponse obj = new ApiResponse();
            List<Seller> result = db.Sellers.Where(x => x.SellerId == sellerid).ToList();
            foreach (var ob in result)
            {
                ob.AccountId = null;
            }
            db.SaveChanges();
            obj.StatusCode = 200;
            obj.Message = "Success";
            return obj;
        }

        async Task<ApiResponse> ISellerRepository.ChangeDisbursedVal(int sellerid)
        {
            ApiResponse obj = new ApiResponse();
            sdirecttestdbEntities db = new sdirecttestdbEntities();
            //var data = (from p in db.Products
            //            join
            //            om in db.OrdersMasters on p.ProductId equals om.ProductId
            //            where p.SellerId == sellerid && om.StatusFlag == 5 && om.IsDisbursed==false
            //            select new mode{ IsDisbursed=om.IsDisbursed }).ToList();
            var data = db.OrdersMasters.Where(x => x.Product.Seller.SellerId == sellerid && x.IsDisbursed == false && x.StatusFlag == 5).ToList();
            foreach (var item in data)
            {
                item.IsDisbursed = true;
                db.SaveChanges();
            }

            obj.StatusCode = 200;
            obj.Message = "Success";
            return obj;
        }

        ApiResponse ISellerRepository.InsertCategory(int masteruserid, Category model)
        {
            ApiResponse obj = new ApiResponse();
            var category = new Category
            {
                CategoryName = model.CategoryName,
                IsActive = true,
                IsDeleted = false,
                CreatedDate = System.DateTime.Now,
                ModifiedDate = System.DateTime.Now,
                CreatedBy = masteruserid.ToString(),
                ModifiedBy = masteruserid.ToString()
            };
            using (sdirecttestdbEntities db = new sdirecttestdbEntities())
            {
                db.Categories.Add(category);
                db.SaveChanges();
            }
            obj.StatusCode = 200;
            obj.Message = "Success";
            return obj;
        }

        ApiResponse ISellerRepository.InsertSubCategory(int masteruserid, SubCategory model)
        {
            sdirecttestdbEntities db = new sdirecttestdbEntities();
            ApiResponse obj = new ApiResponse();
            var subcategory = new SubCategory
            {
                SubCategoryName = model.SubCategoryName,
                IsActive = true,
                IsDeleted = false,
                CreatedDate = System.DateTime.Now,
                ModifiedDate = System.DateTime.Now,
                CreatedBy = masteruserid.ToString(),
                ModifiedBy = masteruserid.ToString(),
                CategoryId = model.CategoryId
            };

            db.SubCategories.Add(subcategory);
            db.SaveChanges();

            obj.StatusCode = 200;
            obj.Message = "Success";
            return obj;
        }
    }
}