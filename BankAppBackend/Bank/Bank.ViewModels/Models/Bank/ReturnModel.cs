using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bank.ViewModels.Models.Bank
{
    public class ReturnModel
    {
        public long AccountId { get; set; }
        public int Id { get; set; }
        public long? bal { get; set; }
        public string Message { get; set; }
        public string JWT { get; set; }
    }
}