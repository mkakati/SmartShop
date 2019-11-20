using Smartshop.DataAccess.Entities;
using Smartshop.ViewModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smartshop.DataAccess.Repository
{
    public interface IAuthRepository
    {
        Task<MasterUser> RegisterMasterUsers(MasterUser model);
        Task<User> RegisterBuyer(User model);
        Task<Seller> RegisterSeller(Seller model);
        Task AddRoles(int MasterUserId, int RoleId);
        Task<List<string>> GetRolesById(int MasterUserId);
        Task AddOtp(int MasterUserId, string otp);
        Task<bool> GetUserByMail(string Email);
        Task<MasterUser> CheckLogin(LoginUserModel model);
        Task<User> GetUserByMasterId(int MasterUserId);
        Task<Seller> GetSellerByMasterId(int MasterUserId);
        Task<MasterUser> GetMasterByMasterId(int MasterUserId);
        Task<MasterUser> UpdateOtp(MasterUser model);
        Task<MasterUser> UpdateTokenInfo(string Email,string token);
        Task<MasterUser> GetMasterUserByMail(string Email);
        Task UpdatePassword(int MasterUserId, string NewPassword);
        Task<bool> CheckOldPassword(int MasterUserId, string OldPassword);
        Task<Seller> CheckSellerExistsByMasterId(int MasterUserId);
        //List<Category> GetAllUsers();
    }
}
