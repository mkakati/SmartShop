using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Buyer
{
    public class OrderDetailsModel
    {
        public int OrdersMasterId { get; set; }
        public int OrderId { get; set; }
        public Nullable<int> Quantity { get; set; }
        public string TransactionId { get; set; }
        // public Nullable<int> OrderId { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public Nullable<double> UnitPrice { get; set; }
        public string ImageUrl { get; set; }
        public string DeliveryDate { get; set; }
        public string Statusflag { get; set; }
        public Nullable<int> st { get; set; }
        public string OrderDate { get; set; }
        public string PaymentStatus { get; set; }
        public string Address { get; set; }
    }
}
