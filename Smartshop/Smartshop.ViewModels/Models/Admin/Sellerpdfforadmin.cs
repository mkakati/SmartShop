using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Admin
{
        public class Sellerpdfforadmin
        {
            public Nullable<int> SellerId { get; set; }
            public string ProductName { get; set; }
            public string StatusFlag { get; set; }
            public int? st;
            public string PaymentStatus { get; set; }       
    }
}
