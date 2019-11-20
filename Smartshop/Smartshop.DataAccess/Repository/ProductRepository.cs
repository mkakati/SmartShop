using Smartshop.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.DataAccess.Repository
{
    public class ProductRepository : IProductRepository
    {
        private sdirecttestdbEntities db = new sdirecttestdbEntities();

        List<Category> IProductRepository.GetCategories()
        {
            var category = db.Categories.ToList();
            if (category == null)
            {
                throw new Exception("Category not found");
            }

            return category;

        }
        List<SubCategory> IProductRepository.GetSubCategories(int catId)
        {
            var subCat = db.SubCategories.ToList();
            if (subCat == null)
            {
                throw new Exception("Subcategories doesnot exist ");
            }
            return subCat;
        }
        List<Product> IProductRepository.GetProducts(int proId)
        {
            var product = db.Products.ToList();
            if (product == null)
            {
                throw new Exception("Product doesnot exist");
            }
            return product;
        }
        List<Product> IProductRepository.GetProductsBySubCate(int subId)
        {
            var product = db.Products.ToList();
            if (product == null)
            {
                throw new Exception("Product not found");
            }
            return product;
                 
        }


    }
}
