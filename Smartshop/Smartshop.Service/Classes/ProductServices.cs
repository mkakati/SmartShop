using Smartshop.DataAccess.Entities;
using Smartshop.DataAccess.Helpers;
using Smartshop.DataAccess.Repository;
using Smartshop.Service.Interfaces;
using Smartshop.ViewModels.Models;
using Smartshop.ViewModels.Models.Product;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Smartshop.Service.Classes
{
    public class ProductServices : IProductServices
    {
        private readonly IProductRepository _category;
        public ProductServices(IProductRepository category)
        {
            _category = category;
        }

        public ApiResponse GetCategories (ViewModelCategory viewModel)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                List<ViewModelCategory> listx = new List<ViewModelCategory>();
                using (sdirecttestdbEntities db = new sdirecttestdbEntities())
                {
                   
                    var result = db.Categories.Where(x => x.IsDeleted == false).ToList();
                    foreach (var item in result.ToList())
                    {
                        listx.Add(new ViewModelCategory
                        {
                            CategoryId = item.CategoryId,
                            CategoryName = item.CategoryName

                        });
                    }
                    
                }

                
                response.data = listx;
                response.StatusCode = 200;
                response.Message = "Success";
            }
            catch(Exception ex)
            {

                response.StatusCode = 400;
                response.Message = ex.Message;


            }
            return response;
            

        }
        public ApiResponse GetSubCategories (int CatId)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                List<SubCategoryModel> listx = new List<SubCategoryModel>();
                using (sdirecttestdbEntities db = new sdirecttestdbEntities())
                {
                    var result = db.SubCategories.Where(x => x.IsDeleted == false & x.CategoryId == CatId).ToList();
                    if (result.Count() == 0)
                    {
                        throw new Exception("No SubCategory found!");
                    }
                    foreach (var item in result.ToList())
                    {
                        listx.Add(new SubCategoryModel
                        {
                            CategoryId = item.CategoryId,
                            SubCategoryName = item.SubCategoryName,
                            SubCategoryId = item.SubCategoryId

                        });
                    }

                }

                //var res = _category.GetCategories();
                response.data = listx;
                response.StatusCode = 200;
                response.Message = "Success";
            }
            catch (Exception ex)
            {
                response.StatusCode = 400;
                response.Message = ex.Message;
            }
            return response;
        }
        public ApiResponse GetProducts (int ProdId)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                ProductModel products = new ProductModel();
                sdirecttestdbEntities db = new sdirecttestdbEntities() ;
                      var result = db.Products.FirstOrDefault(x => x.IsDeleted == false & x.ProductId == ProdId);

                       if (result == null)
                       {
                           throw new Exception("No products found!");
                       }
                       var img = db.ProductImages.FirstOrDefault(x => x.ProductId == result.ProductId);
                       products = new ProductModel
                       {
                           ProductId = result.ProductId,
                           ProductName = result.ProductName,
                           UnitPrice = result.UnitPrice,
                           Description = result.Description,
                           Stock = result.Stock,
                           SellerId = result.SellerId,
                           SubCategoryId = result.SubCategoryId,
                           ImageUrl = img.ImageUrl.ConvertImageToBase64()
                       };
                       
                  

                //var res = _category.GetProducts();
                response.data = products;
                
                response.StatusCode = 200;
                response.Message = "Success";
            }
            catch (Exception ex)
            {
                response.StatusCode = 400;
                response.Message = ex.Message;
            }
            return response;
        }
        public ApiResponse GetProductsBySubCateId (int SubCateId)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                List<ProductBySubCate> products = new List<ProductBySubCate>();
                sdirecttestdbEntities db = new sdirecttestdbEntities();

                //var result = db.Products.Where(x => x.IsDeleted == false & x.SubCategoryId == SubCateId);
                //if (result.Count() == 0)
                //{
                //    throw new Exception("No products found");
                //}
                //foreach (var item in result.ToList())
                //{
                //    products.Add(
                //        new ProductBySubCate
                //        {
                //            ProductId = item.ProductId,
                //            ProductName = item.ProductName,
                //            UnitPrice = item.UnitPrice,
                //            SubCategoryId = item.SubCategoryId,
                //            Stock = item.Stock
                //        });
                //}
                //foreach(var product in products)
                //{
                //    var res = db.ProductImages.FirstOrDefault(x => x.ProductId == product.ProductId);
                //    if (res != null)
                //    {
                //        product.ImageUrl = res.ImageUrl.ConvertThumbToBase64();
                //    }
                //}
                products = (from pi in db.ProductImages
                           join
                           p in db.Products on pi.ProductId equals p.ProductId
                           join
                           s in db.Sellers on p.SellerId equals s.SellerId
                           where p.IsDeleted == false && s.IsApproved == true && p.SubCategoryId == SubCateId
                           select new ProductBySubCate
                           {
                               ProductId = p.ProductId,
                               ProductName = p.ProductName,
                               UnitPrice = p.UnitPrice,
                               Stock = p.Stock,                                                      
                               SubCategoryId = p.SubCategoryId,
                               ImageUrl = pi.ImageUrl
                           }).ToList();
                foreach (var product in products)
                {
                    product.ImageUrl = product.ImageUrl.ConvertThumbToBase64();
                }
                response.data = products;
                response.StatusCode = 200;
                response.Message = "success";
            }
            catch(Exception ex)
            {
                response.Message = ex.Message;
                response.StatusCode = 400;

            }
            return response;
        }
        

       
    }
}
