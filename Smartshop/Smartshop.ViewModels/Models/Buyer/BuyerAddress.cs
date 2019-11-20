using System;

namespace Smartshop.ViewModels.Models.Buyer
{
    public class BuyerAddress
    {
        public int AddressId { get; set; }
        public string FlatNo { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public Nullable<int> PIN { get; set; }
        public Nullable<int> UserId { get; set; }

    }
}
