using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Buyer
{
    public class SearchModel
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public double? UnitPrice { get; set; }
        public string Description { get; set; }
        public string Stock { get; set; }
        public string ImageUrl { get; set; }
        public string SubCategoryName { get; set; }
        
      
    }
}
