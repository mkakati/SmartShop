using Smartshop.DataAccess.Entities;
using Smartshop.DataAccess.Repository;
using Smartshop.Service.Interfaces;
using Smartshop.ViewModels.Models;
using Smartshop.ViewModels.Models.Buyer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.Service.Classes
{
    public class AddressServices : IAddressServices
    {
        private readonly IAddressRepository _address;
        private readonly IAuthRepository _auth;
        public AddressServices(IAddressRepository address,IAuthRepository auth)
        {
            _address = address;
            _auth = auth;
        }
        
        public async Task<ApiResponse> GetAddressesBuyer(int MasterUserId)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                List<BuyerAddress> addresses = new List<BuyerAddress>();
                using (sdirecttestdbEntities db = new sdirecttestdbEntities())
                {
                    var buyer= await _auth.GetUserByMasterId(MasterUserId);
                    var result = db.Addresses.Where(x => x.UserId == buyer.UserId & x.IsDeleted == false).ToList();
                    if (result.Count() == 0 )
                    {
                        throw new Exception("Address not found");
                    }
                    foreach (var item in result.ToList())
                    {
                        addresses.Add(new BuyerAddress
                        {
                            AddressId = item.AddressId,
                            AddressLine1 = item.AddressLine1,
                            AddressLine2 = item.AddressLine2,
                            FlatNo = item.FlatNo,
                            City = item.City,
                            State = item.State,
                            PIN = item.PIN,
                            UserId = item.UserId


                        });
                    }


                }
                response.data = addresses;
                response.StatusCode = 200;
                response.Message = "Success";
            }
            catch(Exception ex)
            {
                response.StatusCode = 400;
                response.Message = ex.Message;
            }
            return response;
        }
        public async Task<ApiResponse> PostAddressesBuyer(BuyerAddress buyerAddress)
        {
            ApiResponse response = new ApiResponse();
            try
            {
                var buyer = await _auth.GetUserByMasterId(Convert.ToInt32(buyerAddress.UserId));
                using (var add = new sdirecttestdbEntities())
                {
                    add.Addresses.Add(new Address()
                    {
                        AddressId = buyerAddress.AddressId,
                        FlatNo = buyerAddress.FlatNo,
                        AddressLine1 = buyerAddress.AddressLine1,
                        AddressLine2 = buyerAddress.AddressLine2,
                        City = buyerAddress.City,
                        State = buyerAddress.State,
                        PIN = buyerAddress.PIN,
                        IsDeleted = false,
                        IsActive = true,
                        CreatedDate = System.DateTime.Now,
                        ModifiedDate = System.DateTime.Now,
                        CreatedBy = Environment.UserName,
                        ModifiedBy = Environment.UserName,
                        UserId = buyer.UserId



                    });
                    add.SaveChanges();
              

                }
                response.StatusCode = 200;
                response.Message = "Success";
            }
            catch(Exception ex)
            {
                response.StatusCode = 400;
                response.Message = ex.Message;
            }
            return response;
        }

        public async Task<ApiResponse> DeleteBuyerAddress(DeleteAddressModel model)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var buyer = await _auth.GetUserByMasterId(model.MasterUserId);
                await _address.DeleteBuyerAddress(buyer.UserId, model.AddressId);
            }
            catch(Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }


    }
}
