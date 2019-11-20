using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bank.ViewModels.Models.Bank
{
    public class RefundModel
    {
        public int OrderMasterId { get; set;}
        public double? Amount { get; set; }
        public long? AccountId { get; set; }
        public double? Balance { get; set; }
    }
}