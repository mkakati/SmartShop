using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Buyer
{
    public class AddCartModel
    {
        public int MasterUserId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
}
