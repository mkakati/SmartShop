using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bank.ViewModels.Models.Bank
{
    public class ChangePasswordModel
    {
        public long AccountId { get; set; }
        public string PIN { get; set; }
        public string NewPIN { get; set; }
    }
}