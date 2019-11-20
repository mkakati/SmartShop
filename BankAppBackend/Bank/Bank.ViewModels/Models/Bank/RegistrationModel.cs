using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Bank.ViewModels.Models.Bank
{
    public class RegistrationModel
    {
        [Key]
        [Required]
        public int AccountId { get; set; }
        public string AccountNo { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PIN { get; set; }
        public string otp { get; set; }
        public DateTime OTP_Created { get; set; }
        public DateTime OTP_Expiry { get; set; }
    //public long AddBalance { get; set; }

}
}