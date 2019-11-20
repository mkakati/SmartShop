using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Buyer
{
    public class DeleteCartModel
    {
        public int CartId { get; set; }
        public int MasterUserId { get; set; }
        public string tempuserid { get; set; }
    }
}
