using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bank.ViewModels.Models.Bank
{
    public class TransactionsModel
    {
        public DateTime? Date { get; set; }
        public string Status { get; set; }
        public long? Balance { get; set; }
        public Double? Credit { get; set; }
        public Double? Debit { get; set; }
        public string Comments { get; set; }
        //public string CreatedBy { get; set; }
        //public long? FromAccount { get; set; }
        //public long? ToAccount { get; set; }
        public int Offset { get; set; }
        public int Limit { get; set; }
        public string Order { get; set; }
        public string Sort { get; set; }
        public int? TotalRows { get; set; }

    }
}