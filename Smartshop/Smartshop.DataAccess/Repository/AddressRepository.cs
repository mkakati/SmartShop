using Smartshop.DataAccess.Entities;
using Smartshop.ViewModels.Models.Buyer;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.DataAccess.Repository
{
    public class AddressRepository : IAddressRepository
    {
        private sdirecttestdbEntities db = new sdirecttestdbEntities();
        
        public List<BuyerAddress> GetAddressesBuyer(int buyerId)
        {
            List<BuyerAddress> add = db.Addresses.Where(x => x.UserId == buyerId & x.IsDeleted == false).Select(s => new BuyerAddress()

            {
                AddressId = s.AddressId,
                FlatNo = s.FlatNo,
                AddressLine1 = s.AddressLine1,
                AddressLine2 = s.AddressLine2,
                City = s.City,
                State = s.State,
                PIN = s.PIN



            }).ToList();
            if (add.Count() == 0)
            {
                throw new Exception("Address not found");
            }
            return add;
        }
        Address IAddressRepository.PostAddressesBuyer(Address address)
        {
            db.Addresses.Add(address);
            if (address == null)
            {
                throw new Exception("Error");
            }
            db.SaveChanges();
            return address;
        }

        public async Task DeleteBuyerAddress(int UserId, int AddressId)
        {
            var addr=await db.Addresses.FirstOrDefaultAsync(x=>x.AddressId==AddressId && x.UserId==UserId);
            addr.IsDeleted = true;
            addr.ModifiedBy = UserId.ToString();
            addr.ModifiedDate = DateTime.Now;
            await db.SaveChangesAsync();
        }
    }
}
