using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Buyer
{
    public class Buyerpdfmodel
    {
        public int? Quantity { get; set; }
        public Nullable<int> UserId { get; set; }
        public string ProductName { get; set; }
        public string OrderDate { get; set; }
        public string PaymentStatus { get; set; }
        public string StatusFlag { get; set; }
        public int? st;
    }
}
