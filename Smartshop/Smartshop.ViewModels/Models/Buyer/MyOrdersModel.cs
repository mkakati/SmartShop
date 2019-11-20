using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Buyer
{
    public class MyOrdersModel
    {
        public int OrderId { get; set; }
        public string TotalAmount { get; set; }
        public string OrderStatus { get; set; }
        public string PaymentStatus { get; set; }
        public string DeliveryDate { get; set; }
        public string OrderDate { get; set; }
        public int MasterUserId { get; set; }

        public Nullable<int> AddressId { get; set; }
        public string Statusflag { get; set; }
        public Nullable<int> st { get; set; }


    }
}
