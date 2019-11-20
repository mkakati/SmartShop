using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models
{
    public class ResendOtp
    {
        public int MasterUserId { get; set; }

        public string Email { get; set; }

        public Nullable<bool> IsVerified { get; set; }
    }
}
