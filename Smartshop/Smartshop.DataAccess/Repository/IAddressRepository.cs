using Smartshop.DataAccess.Entities;
using Smartshop.ViewModels.Models.Buyer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.DataAccess.Repository
{
    public interface IAddressRepository
    {
        List<BuyerAddress> GetAddressesBuyer(int buyerId);

        Address PostAddressesBuyer(Address address);
        Task DeleteBuyerAddress(int UserId,int AddressId);



    }
}
