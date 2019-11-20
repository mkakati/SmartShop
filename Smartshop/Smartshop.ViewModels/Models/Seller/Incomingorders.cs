using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Seller
{
    public class Incomingorders
    {

        public string ProductName { get; set; }
        public Nullable<double> UnitPrice { get; set; }
        public string Description { get; set; }
        public string Stock { get; set; }
        public Nullable<int> Quantity { get; set; }
        public Nullable<int> SellerId { get; set; }
        public Nullable<double> Amount { get; set; }
        public int OrdersMasterId { get; set; }
        public Nullable<int> OrderId { get; set; }
        public string ImageUrl { get; set; }
        public string Address { get; set; }
        public Nullable<int> st { get; set; }
        public string StatusFlag { get; set; }
        public string OrderDate { get; set; }
    }
}
