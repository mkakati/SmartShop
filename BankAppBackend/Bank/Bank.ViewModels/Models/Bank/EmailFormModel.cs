using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Bank.ViewModels.Models.Bank
{
    public class EmailFormModel
    {
        [Required, Display(Name = "Test OTP")]
        public string FromName { get; set; }


        [Required, Display(Name = "testsdd007@gmail.com"), EmailAddress]
        public string FromEmail { get; set; }


        [Required, Display(Name = "OTP FROM TEST")]
        public string Message { get; set; }
    }
}