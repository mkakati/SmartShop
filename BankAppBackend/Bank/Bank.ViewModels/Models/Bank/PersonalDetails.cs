using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bank.ViewModels.Models.Bank
{
    public class PersonalDetails
    {
        public string AccountNo { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public long? Balance { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}