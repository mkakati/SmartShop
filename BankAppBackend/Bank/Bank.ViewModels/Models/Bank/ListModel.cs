using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bank.ViewModels.Models.Bank
{
    public class ListModel
    {
        public int? Offset  { get; set; }
        public int? Limit { get; set; }
        public string  Order { get; set; }
        public string Sort { get; set; }
        public int? AccountId { get; set; }
  
    }
}