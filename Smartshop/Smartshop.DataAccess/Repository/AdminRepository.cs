using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Smartshop.DataAccess.Entities;
using Smartshop.ViewModels.Models.Admin;

namespace Smartshop.DataAccess.Repository
{
    public class AdminRepository : IAdminRepository
    {
        private sdirecttestdbEntities db = new sdirecttestdbEntities();
        public async Task<List<SellerDetails>> GetUnapprovedSellerList()
        {
            var sellers = await db.Sellers.Where(x => x.IsApproved == null && x.IsDeleted==false).Select(s=>new SellerDetails() {
                SellerId=s.SellerId,
                MasterUserId=s.MasterUserId,
                FirstName=s.MasterUser.FirstName,
                LastName=s.MasterUser.LastName,
                Email=s.MasterUser.Email,
                IsVerified=s.MasterUser.IsVerified
            }).ToListAsync();
            if (sellers.Count()==0)
            {
                throw new Exception("No new approval Requests!");
            }
            return sellers;
        }
        public async Task ApproveSellerRequest(int SellerId)
        {
            var seller = await db.Sellers.FirstOrDefaultAsync(x => x.SellerId == SellerId);
            if (seller == null)
            {
                throw new Exception("No Seller Exist");
            }
            seller.IsApproved = true;
            await db.SaveChangesAsync();
        }
        public async Task RejectSellerRequest(int SellerId)
        {
            var seller = await db.Sellers.FirstOrDefaultAsync(x => x.SellerId == SellerId);
            if (seller == null)
            {
                throw new Exception("No Seller Exist");
            }
            seller.IsApproved = false;
            await db.SaveChangesAsync();
        }

        public async Task<List<MasterUserDetailsModel>> GetAllActivatedUsers()
        {
            //var user = await db.MasterUsers.Where(x => x.IsActive == true).Select(s=>new MasterUserDetailsModel() {
            //    MasterUserId=s.MasterUserId,
            //    FirstName=s.FirstName,
            //    LastName=s.LastName,
            //    Email=s.Email,
            //    IsVerified=s.IsVerified,
            //    IsActive = s.IsActive
            //}).ToListAsync();
            //if (user.Count() == 0)
            //{
            //    throw new Exception("No activated user found");
            //}
            //return user;
            //var user = (from m in db.MasterUsers
            //            join
            //            ur in db.UserRoles on m.MasterUserId equals ur.MasterUserId
            //            join
            //            r in db.Roles on ur.RoleId equals r.RoleId

            //            select new MasterUserDetailsModel
            //            {
            //                MasterUserId = m.MasterUserId,
            //                FirstName = m.FirstName,
            //                LastName = m.LastName,
            //                Email = m.Email,
            //                IsVerified = m.IsVerified,
            //                IsActive = m.IsActive,
            //                RoleName = r.RoleName,
            //                RoleId=r.RoleId

            //            }).Where(x => x.IsActive == true && x.RoleId!=3).ToList();
            var user = db.MasterUsers.Select(s => new MasterUserDetailsModel
            {
                MasterUserId = s.MasterUserId,
                FirstName = s.FirstName,
                LastName = s.LastName,
                Email = s.Email,
                IsVerified = s.IsVerified,
                IsActive = s.IsActive,
                RoleName = s.UserRoles.Where(x => x.MasterUserId == s.MasterUserId).Select(x => x.Role.RoleName).ToList()
            }).Where(x => x.IsActive == true && !x.RoleName.Contains("Admin")).ToList();
            if (user.Count() == 0)
            {
                throw new Exception("No activated user found");
            }
            return user;
            
        }

        public async Task<List<MasterUserDetailsModel>> GetAllDeactivatedUsers()
        {
            var user = db.MasterUsers.Where(x => x.IsActive == false).Select(s => new MasterUserDetailsModel()
            {
                MasterUserId = s.MasterUserId,
                FirstName = s.FirstName,
                LastName = s.LastName,
                Email = s.Email,
                IsVerified = s.IsVerified,
                IsActive = s.IsActive,
                RoleName = s.UserRoles.Where(x => x.MasterUserId == s.MasterUserId).Select(x => x.Role.RoleName).ToList()
            }).Where(x => x.IsActive == false && !x.RoleName.Contains("Admin")).ToList();
            if (user.Count() == 0)
            {
                throw new Exception("No deactivated user found");
            }
            return user;
        }

        public async Task ActivateUserByMasterUserId(int MasterUserId)
        {
            var user = await db.MasterUsers.FirstOrDefaultAsync(x => x.MasterUserId == MasterUserId);
            if (user == null)
            {
                throw new Exception("User doesn't exist!");
            }
            user.IsActive = true;
            await db.SaveChangesAsync();
        }

        public async Task DeactivateUserByMasterUserId(int MasterUserId)
        {
            var user = await db.MasterUsers.FirstOrDefaultAsync(x => x.MasterUserId == MasterUserId);
            if (user == null)
            {
                throw new Exception("User doesn't exist!");
            }
            user.IsActive = false;
            await db.SaveChangesAsync();
        }
        List<Sellerpdfforadmin> IAdminRepository.SellerPdfForAdmin()
        {
            List<Sellerpdfforadmin> mylist = (from s in db.Sellers
                                              join
                                              p in db.Products on s.SellerId equals p.SellerId
                                              join
                                              o in db.OrdersMasters on p.ProductId equals o.ProductId
                                              join order in db.Orders on o.OrderId equals order.OrderId
                                              where p.IsDeleted == false
                                              select new Sellerpdfforadmin
                                              {
                                                  PaymentStatus = order.PaymentStatus,
                                                  SellerId = s.SellerId,
                                                  ProductName = p.ProductName,
                                                  st = o.StatusFlag

                                              }).AsEnumerable().Select(x => new Sellerpdfforadmin
                                              {
                                                  PaymentStatus = x.PaymentStatus,
                                                  SellerId = x.SellerId,
                                                  ProductName = x.ProductName,
                                                  StatusFlag = StatusCheck(x.st).ToString()
                                              }).ToList();
            return mylist;
        }
        List<Buyerpdfforadmin> IAdminRepository.GetBuyerPdfForAdmin()
        {
            List<Buyerpdfforadmin> mylist = db.Orders.Select(x => new Buyerpdfforadmin()
            {
                OrderId = x.OrderId,
                TotalAmount = x.TotalAmount,
                UserId = x.UserId,
                TransactionId = x.TransactionId,
                OrderStatus = x.OrderStatus,
                PaymentStatus = x.PaymentStatus,
                OrderDate = x.OrderDate
            }).ToList();
            return mylist;
        }



        //Check status function
        public string StatusCheck(int? status)
        {
            switch (status)
            {
                case 0: return "Placed";
                case 1: return "Accepted";
                case 2: return "Failed";
                case 3: return "Rejected";
                case 4: return "Cancelled";
                case 5: return "Delivered";
                default: return "invalid";
            }
        }

    }
}
