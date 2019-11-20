using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bank.ViewModels.Models.Bank
{
    public class MoneyModel
    {
        public long AccountId { get; set; }
        public string AccountNo { get; set; }
        public long AddBalance { get; set; }
        public string Email { get; set; }
        public string PIN { get; set; }
        public string OTP { get; set; }
        public long Amount { get; set; }
        public int OrderId { get; set; }
    }
}