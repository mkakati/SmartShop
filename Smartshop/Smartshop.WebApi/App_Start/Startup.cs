using Microsoft.IdentityModel.Tokens;
using Microsoft.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Jwt;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

[assembly: OwinStartup(typeof(Smartshop.WebApi.App_Start.Startup))]

namespace Smartshop.WebApi.App_Start
{
    public class Startup
    {

        public void Configuration(IAppBuilder app)
        {
            app.UseJwtBearerAuthentication(
                new JwtBearerAuthenticationOptions
                {
                    AuthenticationMode = AuthenticationMode.Active,
                    TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidAudience = ConfigHelper.GetAudience(),
                        ValidIssuer = ConfigHelper.GetIssuer(),
                        IssuerSigningKey = ConfigHelper.GetSymmetricSecurityKey(),
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true
                    }
                });
        }
        public class ConfigHelper
        {
            public static string GetIssuer()
            {
                //string result = System.Configuration.ConfigurationManager.AppSettings["Issuer"];
                string result = "https://smartshop.com";
                return result;
            }

            public static string GetAudience()
            {
                //string result = System.Configuration.ConfigurationManager.AppSettings["Audience"];
                string result = "https://smartshop.com";
                return result;
            }

            public static SigningCredentials GetSigningCredentials()
            {
                var result = new SigningCredentials(GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256);
                return result;
            }

            public static string GetSecurityKey()
            {
                //string result = System.Configuration.ConfigurationManager.AppSettings["SecurityKey"];
                string result = "ERMN05OPLoDvbTTa/QkqLNMI7cPLguaRyHzyg";
                return result;
            }

            public static byte[] GetSymmetricSecurityKeyAsBytes()
            {
                var issuerSigningKey = GetSecurityKey();
                byte[] data = Encoding.UTF8.GetBytes(issuerSigningKey);
                return data;
            }

            public static SymmetricSecurityKey GetSymmetricSecurityKey()
            {
                byte[] data = GetSymmetricSecurityKeyAsBytes();
                var result = new SymmetricSecurityKey(data);
                return result;
            }

            public static string GetCorsOrigins()
            {
                string result = System.Configuration.ConfigurationManager.AppSettings["CorsOrigins"];
                return result;
            }
        }
    }
}