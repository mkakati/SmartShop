//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Smartshop.DataAccess.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class Transaction
    {
        public int TransactionId { get; set; }
        public Nullable<double> Credit { get; set; }
        public Nullable<double> Debit { get; set; }
        public Nullable<long> Balance { get; set; }
        public Nullable<long> AccountId { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public string Status { get; set; }
        public string Comments { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<int> OrderId { get; set; }
        public Nullable<long> FromAccount { get; set; }
        public Nullable<long> ToAccount { get; set; }
    
        public virtual Account Account { get; set; }
        public virtual Order Order { get; set; }
    }
}
