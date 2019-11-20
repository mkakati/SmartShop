using Smartshop.ViewModels.Models;
using Smartshop.ViewModels.Models.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.Service.Interfaces
{
    public interface IProductServices
    {
        ApiResponse GetCategories(ViewModelCategory viewModel);

        ApiResponse GetSubCategories(int CatId);

        ApiResponse GetProducts(int ProId);

        ApiResponse GetProductsBySubCateId(int SubCateId);


    }
}
