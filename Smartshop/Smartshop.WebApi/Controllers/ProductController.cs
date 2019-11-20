using Smartshop.Service.Interfaces;
using Smartshop.ViewModels.Models;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Smartshop.WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ProductController : ApiController
    {
        private readonly IProductServices _category;

        public ProductController(IProductServices category) //constructor injection
        {
            _category = category;
        }
        
        [HttpGet]
        public ApiResponse GetCategories(ViewModelCategory model)
        {
            return _category.GetCategories(model);
        }
        
        [HttpGet]

        public ApiResponse GetSubCategoriesById(int Id)
        {
            return _category.GetSubCategories(Id);
        }
        
        [HttpGet]

        public ApiResponse GetProductsByProductId(int Id)
        {
            return _category.GetProducts(Id);
        }

        
        [HttpGet]
        public ApiResponse GetProductsBySubCateId ( int Id)
        {
            return _category.GetProductsBySubCateId(Id);
        }
    }
}
