using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models
{
    public class ChangePasswordModel
    {
        public int MasterUserId { get; set; }
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }
    }
}
