using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bank.ViewModels.Models.PDF
{
    public class AccountUserModel
    {
        public long AccountId { get; set; }
        public string AccountNo { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public bool? IsVerified { get; set; }
        public bool? IsActive { get; set; }
        public bool? IsDeleted { get; set; }
        public DateTime? CreatedDate { get; set; }
      

    }
}


