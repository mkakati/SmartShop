using Smartshop.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.DataAccess.Repository
{
    public interface IProductRepository
    {
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(int catId);
        List<Product> GetProducts(int proId);
        List<Product> GetProductsBySubCate(int subId);
    }
}
