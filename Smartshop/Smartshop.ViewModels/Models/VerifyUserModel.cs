using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models
{
    public class VerifyUserModel
    {
        public int MasterUserId { get; set; }
        public string Otp { get; set; }
    }
}
