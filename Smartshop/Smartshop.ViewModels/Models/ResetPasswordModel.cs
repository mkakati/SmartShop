﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models
{
    public class ResetPasswordModel
    {
        public string token { get; set; }
        public string NewPassword { get; set; }
        public string Email { get; set; }
    }
}
