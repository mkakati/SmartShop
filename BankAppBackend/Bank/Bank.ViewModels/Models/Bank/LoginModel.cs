using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bank.ViewModels.Models.Bank
{
    public class LoginModel
    {
        public string Email { get; set; }
        public string PIN { get; set; }
        public string OTP { get; set; }
        public DateTime OTP_Created { get; set; }
        public DateTime OTP_NewExpiry { get; set; }
        public DateTime OTP_NewCreated { get; set; }
        public DateTime updatetime  { get; set; }
        public string GuId { get; set; }
        public string JWT { get; set; }

    }
}