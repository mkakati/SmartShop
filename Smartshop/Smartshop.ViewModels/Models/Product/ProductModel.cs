﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models.Product
{
    public class ProductModel
    {
        public int ProductId { get; set; }

        public string ProductName { get; set; }

        public double? UnitPrice { get; set; }

        public string Description { get; set; }

        public string Stock { get; set;}

        public Nullable<bool> IsActive { get; set; }

        public Nullable<bool> IsDeleted { get; set; }

        public Nullable<int> SellerId { get; set; }
        public Nullable<int> SubCategoryId { get; set; }
        public string ImageUrl { get; set; }
    }
}
