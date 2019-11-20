using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Smartshop.DataAccess.Helpers
{
    public static class Extensions
    {
        public static string ConvertThumbToBase64(this string ImageUrl)
        {
            var path=HttpContext.Current.Server.MapPath("~//ProductImages//thumbnails//" + ImageUrl);
            byte[] imageArray = System.IO.File.ReadAllBytes(path);
            string base64ImageRepresentation = Convert.ToBase64String(imageArray);
            return base64ImageRepresentation;
        }
        public static string ConvertImageToBase64(this string ImageUrl)
        {
            var path = HttpContext.Current.Server.MapPath("~//ProductImages//" + ImageUrl);
            byte[] imageArray = System.IO.File.ReadAllBytes(path);
            string base64ImageRepresentation = Convert.ToBase64String(imageArray);
            return base64ImageRepresentation;
        }
    }
}
