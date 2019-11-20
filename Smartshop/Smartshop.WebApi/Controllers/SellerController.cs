using Smartshop.ViewModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Smartshop.ViewModels.Models.Seller;
using Smartshop.Service.Interfaces;
using Smartshop.DataAccess.Entities;
using System.Threading.Tasks;
using Smartshop.WebApi.Extensions;
using System.Web;
using System.Net.Http.Headers;
using Smartshop.WebApi.Extensions;
using System.Web.Http.Cors;
using System.IO;
using System.Web;
using iTextSharp.text.pdf;
using iTextSharp.text;
using System.Drawing.Text;
using System.Drawing;
using Font = iTextSharp.text.Font;
using System.Reflection;
using System.Data;
using Swagger.Net;

namespace Smartshop.WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SellerController : ApiController
    {       
            private readonly ISellerServices _pro;
            public SellerController(ISellerServices pro)
            {
                _pro = pro;
            }
            
            [HttpGet]
            public Task<ApiResponse> GetProducts()
            {
                int masteruserid = User.Identity.GetMasterUserId();
                return _pro.GetPro(masteruserid);
            }
           
            [HttpPost]
            public Task<ApiResponse> AddProduct(ProductViewModel model)
            {               
                model.SellerId= User.Identity.GetMasterUserId();
                return _pro.Add(model);
            }
            public ApiResponse UploadImage()
            {
            // httpRequest = HttpContext.Current.Request;
            return _pro.Upload();
            }
            
            [HttpPut]
            public ApiResponse UpdateProduct(ProductViewModel model)
            {
                return _pro.UpdatePro(model);
            }

            [HttpDelete]
            public ApiResponse DeleteProduct(int productid)
            {
                return _pro.DeletePro(productid);
            }

            [HttpGet]
            public Task<ApiResponse> IncomingOrders()
            {
                int masteruserid=User.Identity.GetMasterUserId();
                return _pro.Orders(masteruserid);
            }
                  
            [HttpGet]
            public async Task<ApiResponse> GetAmountForWithdrawl()
            {
                int MasterUserId = User.Identity.GetMasterUserId();
                return await _pro.GetAmountForWithdrawl(MasterUserId);
            }

            [HttpGet]
            public async Task<HttpResponseMessage> GenerateExcelReports()

        {
                int MasterUserId = User.Identity.GetMasterUserId();
                var res= await _pro.GenerateExcelReports(MasterUserId);
                var response = new HttpResponseMessage(System.Net.HttpStatusCode.OK);
                byte[] temp = System.Text.Encoding.UTF8.GetBytes(res.data.ToString());
             
            response.Content = new ByteArrayContent(temp);//Use your byte array
            response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
            response.Content.Headers.ContentDisposition.FileName = DateTime.Now.ToString() + ".xls";//your file Name- text.xls
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            response.StatusCode = System.Net.HttpStatusCode.OK;
            return response;
            }

            [HttpPost]
            public ApiResponse Status(StatusModel model)
            {
                return _pro.ChangeStatus(model);
            }
            
            [HttpGet]
            public async Task<ApiResponse> SellerSale()
            {
                int masteruserid = User.Identity.GetMasterUserId();
                return await _pro.SaleHistory(masteruserid);
            }
            [HttpPost]
            public async Task<ApiResponse> RegisterAccount(int AccountId)
            {
                int masteruserid = User.Identity.GetMasterUserId();
                return await _pro.RegisterAccount(AccountId, masteruserid);
            }

            [HttpGet]
            public async Task<ApiResponse> Pdf()
            {
            ApiResponse obj = new ApiResponse();
            try
            {
                int sellerid = User.Identity.GetMasterUserId();
                List<SellerReport> list = await _pro.GeneratePdf(sellerid);
                DataTable table = new DataTable(typeof(SellerReport).Name);
                PropertyInfo[] info = typeof(SellerReport).GetProperties(BindingFlags.Public | BindingFlags.Instance);
                foreach (PropertyInfo prop in info)
                {
                    table.Columns.Add(prop.Name);
                }
                foreach (SellerReport item in list)
                {
                    var values = new object[info.Length];
                    for (int i = 0; i < info.Length; i++)
                    {
                        values[i] = info[i].GetValue(item, null);
                    }
                    table.Rows.Add(values);
                }
                string path = @"D:\SellerPdf" + Guid.NewGuid().ToString().Substring(0, 6) + ".pdf";
                ExporttoPdf(table, path, "Seller data");
                System.Diagnostics.Process.Start(path);
             
                obj.StatusCode = 200;
                obj.Message = "Success";
                obj.data = path;
            }
            catch(Exception ex)
            {
                obj.StatusCode = 400;
                obj.Message = ex.Message;
            }
            return obj;
            }

            void ExporttoPdf(DataTable dtbtable, string strpath, string strheader)
            {
            System.IO.FileStream fs = new FileStream(strpath, FileMode.Create, FileAccess.Write, FileShare.None);
                 Document document = new Document();
                document.SetPageSize(iTextSharp.text.PageSize.A4);
                PdfWriter writer = iTextSharp.text.pdf.PdfWriter.GetInstance(document, fs);
                document.Open();

                BaseFont bfntHead = BaseFont.CreateFont(BaseFont.TIMES_ROMAN, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
                Font fntHead = new Font(bfntHead, 16, 1);
                Paragraph prgHeading = new Paragraph();
                prgHeading.Alignment = Element.ALIGN_CENTER;
                prgHeading.Add(new Chunk(strheader.ToUpper(), fntHead));
                document.Add(prgHeading);
                document.Add(new Chunk("\n", fntHead));
                PdfPTable table = new PdfPTable(dtbtable.Columns.Count);
                BaseFont btnColumnHeader = BaseFont.CreateFont(BaseFont.TIMES_ROMAN, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
                iTextSharp.text.Font fntColumnHeader = new iTextSharp.text.Font(btnColumnHeader, 10, 1);
                for (int i = 0; i < dtbtable.Columns.Count; i++)
                {
                    PdfPCell cell = new PdfPCell();
                    cell.AddElement(new Chunk(dtbtable.Columns[i].ColumnName.ToUpper(), fntColumnHeader));
                    table.AddCell(cell);
                }
                for (int i = 0; i < dtbtable.Rows.Count; i++)
                {
                    for (int j = 0; j < dtbtable.Columns.Count; j++)
                    {
                        table.AddCell(dtbtable.Rows[i][j].ToString());
                    }
                }
                document.Add(table);
                document.Close();
                writer.Close();
                fs.Close();
        }

        [HttpGet]
        public async Task<ApiResponse> GetAccountId()
        {
            int masteruserid = User.Identity.GetMasterUserId();
            return await _pro.LinkAccount(masteruserid);
        }

        [HttpGet]
        public async Task<ApiResponse> Unlink()
        {
            int masteruserid = User.Identity.GetMasterUserId();
            return await _pro.Unlink(masteruserid);
        }
        [HttpGet]
        public async Task<ApiResponse> Disbursed()
        {
            int masteruserid = User.Identity.GetMasterUserId();
            return await _pro.Disbursed(masteruserid);
        }
        [HttpPost]
        public ApiResponse AddCategory(Category model)
        {
            int masteruserid = User.Identity.GetMasterUserId();
            return _pro.NewCategory(masteruserid, model);
        }

        [HttpPost]
        public ApiResponse AddSubCategory(SubCategory model)
        {
            int masteruserid = User.Identity.GetMasterUserId();
            return _pro.NewSubCategory(masteruserid, model);
        }

    }
}