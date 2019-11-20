using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Seller
{
   public class StatusModel
    {
        public int OrdersMasterId { get; set; }
        public Nullable<int> StatusFlag { get; set; }
    }
}
