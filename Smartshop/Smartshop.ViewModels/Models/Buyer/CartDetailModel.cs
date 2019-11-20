using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Buyer
{
    public class CartDetailModel
    {
        public int CartId { get; set; }
        public int? ProductId { get; set; }
        public string Quantity { get; set; }
        public string ProductName { get; set; }
        public double? UnitPrice { get; set; }
        public int? SellerId { get; set; }
        public int? SubCategoryId { get; set; }
        public string  ImageUrl { get; set; }
        public bool InStock { get; set; }
        public string Stock { get; set; }

        public string TempUserId { get; set; }
    }
}
