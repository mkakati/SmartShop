using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.ViewModels.Models
{
    public class SubCategoryModel
    {
        public int SubCategoryId { get; set; }

        public string SubCategoryName { get; set; }

        public Nullable<bool> IsActive { get; set; }

        public Nullable<bool> IsDeleted { get; set; }

        public Nullable<int> CategoryId { get; set; }



    }
}
