using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Buyer
{
    public class DetailsAfterPayment
    {
        public Nullable<int> PIN { get; set; }
        public Nullable<int> AddressId { get; set; }
        public string TransactionId { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string OrderId { get; set; }
        public string Message { get; set; }
        public string TotalAmount { get; set; }
        public string PaymentStatus { get; set; }
        public int masterid { get; set; }
        public Nullable<int> Quantity { get; set; }
        public string Address { get; set; }
        public int UserId { get; set; }
    }
}
