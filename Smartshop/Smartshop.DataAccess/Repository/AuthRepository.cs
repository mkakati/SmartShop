using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Smartshop.DataAccess.Entities;
using Smartshop.ViewModels.Models;

namespace Smartshop.DataAccess.Repository
{
    public class AuthRepository : IAuthRepository
    {
        sdirecttestdbEntities _dbSet = new sdirecttestdbEntities();

        public async Task AddOtp(int MasterUserId, string otp)
        {
            var user=await _dbSet.MasterUsers.FirstOrDefaultAsync(x => x.MasterUserId == MasterUserId);
            if (user == null)
            {
                throw new Exception("User doesnot exists!");
            }
            user.OTP = otp;
            user.OTP_Expiry = DateTime.UtcNow;
            await _dbSet.SaveChangesAsync();
        }

        public async Task AddRoles(int MasterUserId, int RoleId)
        {
            _dbSet.UserRoles.Add(new UserRole()
            {
                MasterUserId=MasterUserId,
                RoleId=RoleId
            });
            await _dbSet.SaveChangesAsync();
        }

        public async Task<List<string>> GetRolesById(int MasterUserId)
        {
            List<string> rolelist = new List<string>();
            var role=await _dbSet.UserRoles.Where(x => x.MasterUserId == MasterUserId).ToListAsync();
            if (role == null)
            {
                throw new Exception("No roles assigned");
            }
            foreach(var a in role)
            {
                var roles = await _dbSet.Roles.FirstOrDefaultAsync(x => x.RoleId == a.RoleId);
                rolelist.Add(roles.RoleName);
            }
            
            return rolelist;
        }

        public async Task<User> RegisterBuyer(User model)
        {
            _dbSet.Users.Add(model);
            await _dbSet.SaveChangesAsync();
            return model;
        }

        public async Task<MasterUser> RegisterMasterUsers(MasterUser model)
        {
            _dbSet.MasterUsers.Add(model);
            await _dbSet.SaveChangesAsync();
            return model;
        }

        public async Task<Seller> RegisterSeller(Seller model)
        {
            _dbSet.Sellers.Add(model);
            await _dbSet.SaveChangesAsync();
            return model;
        }

        public async Task<bool> GetUserByMail(string Email)
        {
            var user=await _dbSet.MasterUsers.FirstOrDefaultAsync(x=>x.Email==Email);
            if (user != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public async Task<MasterUser> CheckLogin(LoginUserModel model)
        {
            var user=await _dbSet.MasterUsers.FirstOrDefaultAsync(x => x.Email == model.Email);
            if (user == null)
            {
                throw new Exception("User doesnot exist!");
            }
            if (user.Password == model.Password && user.IsActive==true)
            {
                return user;
            }
            else if (user.Password == model.Password && user.IsActive == false)
            {
                throw new Exception("Sorry, you are deactivated by Admin!");
            }
            else
            {
                throw new Exception("Email/Password is incorrect");
            }
        }
        public async Task<User> GetUserByMasterId(int MasterUserId)
        {
            var user = await _dbSet.Users.FirstOrDefaultAsync(x => x.MasterUserId == MasterUserId);
            if (user == null)
            {
                throw new Exception("User doesnot exist");
            }
            return user;
        }
        public async Task<Seller> GetSellerByMasterId(int MasterUserId)
        {
            var seller = await _dbSet.Sellers.FirstOrDefaultAsync(x => x.MasterUserId == MasterUserId);
            if (seller == null)
            {
                throw new Exception("Seller doesnot exist");
            }
            return seller;
        }
        public async Task<Seller> CheckSellerExistsByMasterId(int MasterUserId)
        {
            var seller = await _dbSet.Sellers.FirstOrDefaultAsync(x => x.MasterUserId == MasterUserId);
            return seller;
        }
        public async Task<MasterUser> GetMasterByMasterId(int MasterUserId)
        {
            var master = await _dbSet.MasterUsers.FirstOrDefaultAsync(x => x.MasterUserId == MasterUserId);
            if (master == null)
            {
                throw new Exception("User doesnot exist");
            }
            return master;
        }
        public async Task<MasterUser> UpdateOtp(MasterUser model)
        {
            var master = await _dbSet.MasterUsers.FirstOrDefaultAsync(x => x.MasterUserId == model.MasterUserId);
            if (master == null)
            {
                throw new Exception("Something went wrong!");
            }
            master.IsVerified = true;
            await _dbSet.SaveChangesAsync();
            return master;
        }
        public async Task<MasterUser> UpdateTokenInfo(string Email,string token)
        {
            var user= await _dbSet.MasterUsers.FirstOrDefaultAsync(x => x.Email == Email);
            if (user == null)
            {
                throw new Exception("User not found!");
            }
            user.ResetToken = token;
            user.ResetTimeOut = DateTime.UtcNow.ToString();
            await _dbSet.SaveChangesAsync();
            return user;
        }
        public async Task<MasterUser> GetMasterUserByMail(string Email)
        {
            var user = await _dbSet.MasterUsers.FirstOrDefaultAsync(x => x.Email == Email);
            if (user == null)
            {
                throw new Exception("User not found!");
            }
            return user;
        }
        public async Task UpdatePassword(int MasterUserId, string NewPassword)
        {
            var user = await _dbSet.MasterUsers.FirstOrDefaultAsync(x => x.MasterUserId == MasterUserId);
            if (user == null)
            {
                throw new Exception("User not found!");
            }
            user.Password = NewPassword;
            await _dbSet.SaveChangesAsync();
        }
        public async Task<bool> CheckOldPassword(int MasterUserId, string OldPassword)
        {
            var master = await _dbSet.MasterUsers.FirstOrDefaultAsync(x => x.MasterUserId == MasterUserId && x.Password == OldPassword);
            if (master == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
}
