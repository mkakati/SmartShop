using Smartshop.Service.Interfaces;
using Smartshop.ViewModels.Models;
using Smartshop.ViewModels.Models.Buyer;
using Smartshop.WebApi.Extensions;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Smartshop.WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AddressController : ApiController
    {
        private readonly IAddressServices _address;

        public AddressController (IAddressServices address)
        {
            _address = address;
        }
        [HttpGet]
        public async Task<ApiResponse> GetAddressByBuyerId()
        {
            var MasterUserId= User.Identity.GetMasterUserId();
            return await _address.GetAddressesBuyer(MasterUserId);
        }
        [HttpPost]

        public Task<ApiResponse> PostAddressBuyerId(BuyerAddress model)
        {
            model.UserId= User.Identity.GetMasterUserId();
            return _address.PostAddressesBuyer(model);
        }
        [HttpDelete]
        public async Task<ApiResponse> DeleteBuyerAddress(DeleteAddressModel model)
        {
            model.MasterUserId = User.Identity.GetMasterUserId();
            return await _address.DeleteBuyerAddress(model);
        }
    }
}
