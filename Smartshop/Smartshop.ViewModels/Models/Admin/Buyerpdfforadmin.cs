using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Admin
{
    public class Buyerpdfforadmin
    {
        public int OrderId { get; set; }
        public string TotalAmount { get; set; }
        public Nullable<int> UserId { get; set; }
        public string TransactionId { get; set; }
        public string OrderStatus { get; set; }
        public string PaymentStatus { get; set; }
        public string OrderDate { get; set; }
    }
}
