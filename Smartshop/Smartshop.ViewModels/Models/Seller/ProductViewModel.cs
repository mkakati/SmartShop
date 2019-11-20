using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Seller
{
   public class ProductViewModel
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public Nullable<double> UnitPrice { get; set; }
        public string Description { get; set; }
        public string Stock { get; set; }
        public string ImageUrl { get; set; }
        public int CategoryId { get; set; }
        public int SubCategoryId { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<bool> IsDeleted { get; set; }      
        public int SellerId { get; set; }

    }
}
