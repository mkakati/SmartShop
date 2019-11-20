using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Admin
{
    public class MasterUserDetailsModel
    {
        public int MasterUserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool? IsVerified { get; set; }
        public bool? IsActive { get; set; }
        public List<string> RoleName { get; set; }
        public int RoleId { get; set; }

    }
}
