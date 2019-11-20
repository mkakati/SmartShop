using Smartshop.ViewModels.Models;
using Smartshop.ViewModels.Models.Buyer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.Service.Interfaces
{
    public interface IAddressServices
    {
        Task<ApiResponse> GetAddressesBuyer(int buyerId);

        Task<ApiResponse> PostAddressesBuyer(BuyerAddress model);
        Task<ApiResponse> DeleteBuyerAddress(DeleteAddressModel model);
    }
}
