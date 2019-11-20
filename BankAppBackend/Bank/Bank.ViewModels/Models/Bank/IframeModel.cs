using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bank.ViewModels.Models.Bank
{
    public class IframeModel
    {
        public long? AccountId { get; set; }
        public int Id { get; set; }
        public double? Amount { get; set; }
        public int TransactionId { get; set; }
        public int? OrderId { get; set; }
        public string Message { get; set; }
    }
}