using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Seller
{
    public class SaleHistoryModel
    {
        public string ProductName { get; set; }
        public Nullable<int> Quantity { get; set; }
        public string TotalAmount { get; set; }
        public string DeliveryDate { get; set; }
        public string OrderDate { get; set; }
        public Nullable<int> OrderId { get; set; }
        public Nullable<int> st { get; set; }
        public string StatusFlag { get; set; }
        public Nullable<int> SellerId { get; set; }
    }
}
