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
    
    public partial class Account
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Account()
        {
            this.Sellers = new HashSet<Seller>();
            this.Transactions = new HashSet<Transaction>();
        }
    
        public long AccountId { get; set; }
        public string AccountNo { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public Nullable<long> Balance { get; set; }
        public string PIN { get; set; }
        public Nullable<bool> IsVerified { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public string OTP { get; set; }
        public Nullable<System.DateTime> OTP_Expiry { get; set; }
        public Nullable<System.DateTime> OTP_Created { get; set; }
        public string PasswordResetCode { get; set; }
        public Nullable<System.DateTime> Link_Created { get; set; }
        public Nullable<System.DateTime> Link_Expired { get; set; }
        public string JWTToken { get; set; }
        public Nullable<System.DateTime> JWT_Token_Created { get; set; }
        public Nullable<System.DateTime> JWT_Token_Expired { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Seller> Sellers { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Transaction> Transactions { get; set; }
    }
}
