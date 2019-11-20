using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Buyer
{
    public class DataModel
    {
        public int? OrderId { get; set; }
        public Double? Amount { get; set; }
        public string Status { get; set; }
        public int TransactionId { get; set; }
    }
}
