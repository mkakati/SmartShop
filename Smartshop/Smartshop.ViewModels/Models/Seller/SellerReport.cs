using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Seller
{
    public class SellerReport
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public Nullable<int> Quantity { get; set; }
        public Nullable<double> Amount { get; set; }
       // public Nullable<int> SellerId { get; set; }
    }
}
