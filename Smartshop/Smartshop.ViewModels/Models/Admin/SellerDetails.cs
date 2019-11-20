using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Admin
{
    public class SellerDetails
    {
        public int SellerId { get; set; }
        public int? MasterUserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool? IsVerified { get; set; }
    }
}
