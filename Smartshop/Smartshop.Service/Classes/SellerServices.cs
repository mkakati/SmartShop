using Smartshop.DataAccess.Entities;
using Smartshop.DataAccess.Repository;
using Smartshop.DataAccess.Repository.SellerRepo;
using Smartshop.Service.Interfaces;
using Smartshop.ViewModels.Models;
using Smartshop.ViewModels.Models.Seller;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Smartshop.Service.Classes
{   
    public class SellerServices : ISellerServices
    {
        private readonly IAuthRepository _auth;
        private readonly ISellerRepository _newpro;
        public SellerServices(ISellerRepository newpro, IAuthRepository auth)
        {
            _newpro = newpro;
            _auth = auth;
        }

        public async Task<ApiResponse> GetPro(int masteruserid)
        {
            ApiResponse rr = new ApiResponse();
            try
            {
                var seller = await _auth.GetSellerByMasterId(masteruserid);
                List<ProductViewModel> result = _newpro.GetAllProducts(seller.SellerId);                
                rr.data = result;
                rr.StatusCode = 200;
                rr.Message = "Success";
            }
            catch (Exception ex)
            {
                rr.Message = ex.Message;
                rr.StatusCode = 400;
            }
            return rr;
        }

        public async Task<ApiResponse> Add(ProductViewModel model)
        {        
            ApiResponse obj = new ApiResponse();
            try
            {               
                var seller =await _auth.GetSellerByMasterId(model.SellerId);
                model.SellerId = seller.SellerId;
                var abc=_newpro.RegisterNewProducts(model);

                obj.StatusCode = 200;
                obj.Message = "Success";
                obj.data = abc.data;
            }
            catch (Exception e)
            {
                obj.StatusCode = 400;
                obj.Message = e.Message;
            }
            return obj;
        }
        //Upload Image API
        public ApiResponse Upload()
        {
            ApiResponse obj = new ApiResponse();
            try
            {
                string imageName = null;
                var httpRequest = HttpContext.Current.Request;
                var productId= httpRequest.Form["ProductId"];
                //Upload Image
                var postedFile = httpRequest.Files["Image"];
                //Create custom filename
                if (postedFile != null)
                {
                    imageName = new String(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
                    imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
                    var filePath = HttpContext.Current.Server.MapPath("~//ProductImages//" + imageName);
                    //var filePath = "D:/Major Project(Smartshop)/MS_sdirect/Smartshop/Smartshop.Service/Images/" + imageName;
                    postedFile.SaveAs(filePath);
                    SaveThumbnail(100,100, postedFile.InputStream, HttpContext.Current.Server.MapPath("~//ProductImages//thumbnails//" + imageName));
                }
                _newpro.Saveimg(Convert.ToInt32(productId),imageName);
                obj.StatusCode = 200;
                obj.Message = "Success";
            }
            catch(Exception ex)
            {
                obj.StatusCode = 400;
                obj.Message = ex.Message;
            }
            return obj;
        }
        public void SaveThumbnail(int Width, int Height, Stream streamImg, string saveFilePath)
        {
            Bitmap sourceImage = new Bitmap(streamImg);
            using (Bitmap objBitmap = new Bitmap(Width, Height))
            {
                objBitmap.SetResolution(sourceImage.HorizontalResolution, sourceImage.VerticalResolution);
                using (Graphics objGraphics = Graphics.FromImage(objBitmap))
                {
                    // Set the graphic format for better result cropping   
                    objGraphics.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.AntiAlias;

                    objGraphics.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.HighQualityBicubic;
                    objGraphics.DrawImage(sourceImage, 0, 0, Width, Height);

                    // Save the file path, note we use png format to support png file   
                    objBitmap.Save(saveFilePath);
                }
            }
        }

        public ApiResponse UpdatePro( ProductViewModel model)
        {
            ApiResponse obj = new ApiResponse();
            try
            {
                _newpro.ChangeProductDetails( model);
                obj.StatusCode = 200;
                obj.Message = "Success";
            }
            catch (Exception ex)
            {              
                obj.Message = ex.Message;
                obj.StatusCode = 400;
            }
            return obj;
        }

        public ApiResponse DeletePro(int productid)
        {
            ApiResponse obj = new ApiResponse();
            try
            {
                _newpro.RemoveProduct(productid);
                obj.StatusCode = 200;
                obj.Message = "Success";
            }
            catch (Exception ex)
            {
                obj.Message = ex.Message;
                obj.StatusCode = 400;
            }
            return obj;
        }

        public async Task<ApiResponse> Orders(int masteruserid)
        {
            ApiResponse obj = new ApiResponse();
            try
            {
                var seller = await _auth.GetSellerByMasterId(masteruserid);
                List<Incomingorders> result = _newpro.Sellerorders(seller.SellerId);
                obj.data = result;
                obj.StatusCode = 200;
                obj.Message = "Success";
            }
            catch (Exception ex)
            {
                obj.Message = ex.Message;
                obj.StatusCode = 400;
            }
            return obj;
        }

      /*  public async Task<ApiResponse> Generatepdf(int masteruserid)
        {
            ApiResponse obj = new ApiResponse();
            try
            {
                var seller = await _auth.GetSellerByMasterId(masteruserid);
                List<SellerReport> result = _newpro.ReportGeneration(seller.SellerId);
                obj.data = result;
                //pdf generate logic
                _pdf.ExportToPdf(model,viewName);                                   
                obj.StatusCode = 200;
                obj.Message = "Success";
            }
            catch(Exception ex)
            {
                obj.Message = ex.Message;
                obj.StatusCode = 400;
            }
            return obj;
        } */
        public async Task<ApiResponse> GetAmountForWithdrawl(int MasterUserId)
        {
            ApiResponse res = new ApiResponse();
            try
            {
                var seller=await _auth.GetSellerByMasterId(MasterUserId);
                var amount=await _newpro.GetAmountForWithdrawl(seller.SellerId);
                res.StatusCode = 200;
                res.Message = "Success";
                res.data = amount;
            }
            catch(Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }
        public async Task<ApiResponse> GenerateExcelReports(int MasterUserId)
        {
            ApiResponse res = new ApiResponse();
            var seller=await _auth.GetSellerByMasterId(MasterUserId);
            try
            {
                List<ExcelReportModel> result = _newpro.ExcelReportGeneration(seller.SellerId);
                StringBuilder str = new StringBuilder();
                str.Append("<table border=`" + "1px" + "`b>");
                str.Append("<tr>");
                str.Append("<td><b><font face=Arial Narrow size=3>Seller Id</font></b></td>");
                str.Append("<td><b><font face=Arial Narrow size=3>Product Id</font></b></td>");
                str.Append("<td><b><font face=Arial Narrow size=3>Order Id</font></b></td>");
                str.Append("<td><b><font face=Arial Narrow size=3>Product Name</font></b></td>");
                str.Append("<td><b><font face=Arial Narrow size=3>Quantity</font></b></td>");
                str.Append("<td><b><font face=Arial Narrow size=3>Amount</font></b></td>");
                str.Append("<td><b><font face=Arial Narrow size=3>Status</font></b></td>");
                str.Append("</tr>");

                foreach (ExcelReportModel val in result)
                {
                    str.Append("<tr>");
                    str.Append("<td><font face=Arial Narrow size=" + "14px" + ">" + val.SellerId.ToString() + "</font></td>");
                    str.Append("<td><font face=Arial Narrow size=" + "14px" + ">" + val.ProductId.ToString() + "</font></td>");
                    str.Append("<td><font face=Arial Narrow size=" + "14px" + ">" + val.OrderId.ToString() + "</font></td>");
                    str.Append("<td><font face=Arial Narrow size=" + "14px" + ">" + val.ProductName.ToString() + "</font></td>");
                    str.Append("<td><font face=Arial Narrow size=" + "14px" + ">" + val.Quantity.ToString() + "</font></td>");
                    str.Append("<td><font face=Arial Narrow size=" + "14px" + ">" + val.Amount.ToString() + "</font></td>");
                    str.Append("<td><font face=Arial Narrow size=" + "14px" + ">" + val.Status.ToString() + "</font></td>");
                    str.Append("</tr>");
                }
                str.Append("</table>");
                res.StatusCode = 200;
                res.Message = "Success";
                res.data = str;
            }
            catch (Exception ex)
            {
                res.StatusCode = 400;
                res.Message = ex.Message;
                res.data = null;
            }
            return res;
        }

        public ApiResponse ChangeStatus(StatusModel model)
        {
            ApiResponse obj = new ApiResponse();
            try
            {
                _newpro.NewStatus(model);
                obj.StatusCode = 200;
                obj.Message = "Success";
            }
            catch (Exception ex)
            {
                obj.StatusCode = 400;
                obj.Message = ex.Message;
            }
            return obj;
        }

        public async Task<ApiResponse> SaleHistory(int masteruserid)
        {
            ApiResponse obj = new ApiResponse();
            try
            {
                var seller = await _auth.GetSellerByMasterId(masteruserid);
                List<SaleHistoryModel> result = _newpro.Sale(seller.SellerId);
                obj.data = result;
                obj.StatusCode = 200;
                obj.Message = "Success";
            }
            catch (Exception ex)
            {
                obj.StatusCode = 400;
                obj.Message = ex.Message;
            }
            return obj;
        }
        public async Task<ApiResponse> RegisterAccount(int AccountId, int masteruserid)
        {
            ApiResponse obj = new ApiResponse();
            try
            {
                var seller = await _auth.GetSellerByMasterId(masteruserid);
                _newpro.PostAccountId(AccountId,seller.SellerId);
                obj.StatusCode = 200;
                obj.Message = "Success";
            }
            catch(Exception ex)
            {
                obj.StatusCode = 400;
                obj.Message = ex.Message;
            }
            return obj;
        }

        public async Task<List<SellerReport>> GeneratePdf(int sellerid)
        {
            var seller = await _auth.GetSellerByMasterId(sellerid);
            List<SellerReport> myreport = _newpro.Pdf(seller.SellerId);
            return myreport;
        }
        public async Task<ApiResponse> LinkAccount(int masteruserid)
        {
            ApiResponse obj = new ApiResponse();
            try
            {
                var res = await _newpro.LinkWithAccountId(masteruserid);
                obj.StatusCode = 200;
                obj.Message = "Success";
                obj.data = res;
            }
            catch (Exception ex)
            {
                obj.StatusCode = 400;
                obj.Message = ex.Message;
                obj.data = null;
            }
            return obj;
        }
        public async Task<ApiResponse> Unlink(int masteruserid)
        {
            ApiResponse obj = new ApiResponse();
            try
            {
                var seller = await _auth.GetSellerByMasterId(masteruserid);
                await _newpro.UnlinkBankAccount(seller.SellerId);
                obj.StatusCode = 200;
                obj.Message = "Success";
            }
            catch (Exception ex)
            {
                obj.StatusCode = 400;
                obj.Message = ex.Message;
            }
            return obj;
        }
        public async Task<ApiResponse> Disbursed(int masteruserid)
        {
            ApiResponse obj = new ApiResponse();
            try
            {
                var seller = await _auth.GetSellerByMasterId(masteruserid);
                var res=await _newpro.ChangeDisbursedVal(seller.SellerId);
                obj.data = res;
                obj.StatusCode = 200;
                obj.Message = "Success";
            }
            catch (Exception ex)
            {
                obj.StatusCode = 400;
                obj.Message = ex.Message;
            }
            return obj;
        }
        public ApiResponse NewCategory(int masteruserid, Category model)
        {
            ApiResponse obj = new ApiResponse();
            try
            {
                _newpro.InsertCategory(masteruserid, model);
                obj.StatusCode = 200;
                obj.Message = "success";
            }
            catch (Exception ex)
            {
                obj.StatusCode = 400;
                obj.Message = ex.Message;
                obj.data = null;
            }
            return obj;
        }
        public ApiResponse NewSubCategory(int masteruserid, SubCategory model)
        {
            ApiResponse obj = new ApiResponse();
            try
            {
                _newpro.InsertSubCategory(masteruserid, model);
                obj.StatusCode = 200;
                obj.Message = "Success";
            }
            catch (Exception ex)
            {
                obj.StatusCode = 400;
                obj.Message = ex.Message;
                obj.data = null;
            }
            return obj;
        }

    }
}
