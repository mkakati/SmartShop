using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Web;

namespace Smartshop.WebApi.Extensions
{
    public static class IdentityExtensions
    {
        public static int GetMasterUserId(this IIdentity identity)
        {
            ClaimsIdentity claimsIdentity = identity as ClaimsIdentity;
            Claim claim = claimsIdentity?.FindFirst("MasterUserId");

            if (claim == null)
                return 0;

            return int.Parse(claim.Value);
        }
    }
}