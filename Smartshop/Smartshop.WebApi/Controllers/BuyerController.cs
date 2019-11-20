using iTextSharp.text;
using iTextSharp.text.pdf;
using Smartshop.DataAccess.Entities;
using Smartshop.Service.Interfaces;
using Smartshop.ViewModels.Models;
using Smartshop.ViewModels.Models.Buyer;
using Smartshop.WebApi.Extensions;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Smartshop.WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BuyerController : ApiController
    {
        private readonly IBuyerServices _service;
        DataModel dam = null;
        public BuyerController(IBuyerServices service)
        {
            _service = service;
            dam = new DataModel();
        }

        [HttpPost]
        public async Task<ApiResponse> AddCartItems(AddCartModel model)
        {
            model.MasterUserId= User.Identity.GetMasterUserId();
            return await _service.AddCartItems(model);
        }

        [HttpGet]
        public async Task<ApiResponse> ViewCartItems()
        {
            int MasterUserId= User.Identity.GetMasterUserId();
            return await _service.ViewCartItems(MasterUserId);
        }
        [HttpGet]
        public async Task<ApiResponse> GetOrdersByUserId ()
        {
            int MasterUserId = User.Identity.GetMasterUserId();
            return await _service.GetAllOrders(MasterUserId);
        }
        [HttpGet]
        public  async Task<ApiResponse> GetOrderDetails(int OrderId)
        {
            return await _service.GetOrderDetails(OrderId);
        }
        [HttpGet]
        public async Task<ApiResponse> GetRecentProducts()
        {
            return await _service.GetRecentProducts();
        }

        [HttpPost]
        public async Task<ApiResponse> PlaceOrder(PlaceOrderModel model)
        {
            model.MasterUserId = User.Identity.GetMasterUserId();
            return await _service.PlaceOrder(model);
        }
        [HttpPost]
        public async Task<ApiResponse> DeleteCartItems(DeleteCartModel model)
        {
            model.MasterUserId = User.Identity.GetMasterUserId();
            return await _service.DeleteCartItems(model);
        } 
        [HttpPost]
        public async Task<ApiResponse> EmptyCart()
        {
            int MasterUserId = User.Identity.GetMasterUserId();
            return await _service.EmptyCart(MasterUserId);
        }
        [HttpGet]
        public async Task<ApiResponse> GetCartTotal()
        {
            int MasterUserId = User.Identity.GetMasterUserId();
            return await _service.GetCartTotal(MasterUserId);
        }
        [HttpPost]
        public IHttpActionResult TransactionData(DataModel data)
        {
            dam = _service.DataTransaction(data);
            if (dam != null)
            {
                return Ok(dam);
            }
            else
            {
                return Ok(dam);
            }

        }

        [HttpGet]
        public async Task<ApiResponse> Search(string searchstring)
        {
            return await _service.SearchProducts(searchstring);
        }
        [HttpPost]
        public async Task<ApiResponse> details(DetailsAfterPayment details)
        {
            details.masterid = User.Identity.GetMasterUserId();
            return await _service.Details(details);
        }

        [HttpGet]
        public async void BuyerPdf()
        {
            int userid = User.Identity.GetMasterUserId();
            List<Buyerpdfmodel> list = await _service.GeneratePdf(userid);
            DataTable table = new DataTable(typeof(Buyerpdfmodel).Name);
            PropertyInfo[] info = typeof(Buyerpdfmodel).GetProperties(BindingFlags.Public | BindingFlags.Instance);
            foreach (PropertyInfo prop in info)
            {
                table.Columns.Add(prop.Name);
            }
            foreach (Buyerpdfmodel item in list)
            {
                var values = new object[info.Length];
                for (int i = 0; i < info.Length; i++)
                {
                    values[i] = info[i].GetValue(item, null);
                }
                table.Rows.Add(values);
            }
            ExporttoPdf(table, @"D:\Buyer\BuyerReport.pdf", "Product purchase history");
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
        public async Task<ApiResponse> GetCartQuantity()
        {
            int userid = User.Identity.GetMasterUserId();
            return await _service.GetCartTotalItem(userid);
        }
      
        [HttpGet]
        public async Task<ApiResponse> GetDetails(int orderid)
        {
            return await _service.GetDetails(orderid);
        }

        [HttpPost]
        public async Task<ApiResponse> AddTemporaryCartItems(TempCartItem model)
        {
            return await _service.AddTemporaryCartItems(model);
        }

        [HttpPost]
        public async Task<ApiResponse> GetCartDataFromTemp(CartToTempModel model)
        {
            model.MasterUserId = User.Identity.GetMasterUserId();
            return await _service.GetCartDataFromTemp(model);
        }
        [HttpGet]
        public ApiResponse GetCartDataWithoutLogin(string tempId)
        {
            return _service.GetCartDataWithoutLogin(tempId);
        }
        [HttpGet]
        public ApiResponse GetCartQuantityWithoutLogin(string tempuserid)
        {
           
            return  _service.GetCartQuantityWithoutLogin(tempuserid);
        }
        [HttpPost]
        public async Task<ApiResponse> EmptyTempCart( string tempuserid)
        {
            return await _service.EmptyTempCart(tempuserid);
        }

        [HttpPost]
        public async Task<ApiResponse> DeleteTempCartItem(DeleteCartModel model)
        {
            return await _service.DeleteTempCartItem(model.CartId, model.tempuserid);
        }
        [HttpGet]
        public async Task<ApiResponse> CancelOrderItem(int OrderMasterId)
        {
            int masteruserid=User.Identity.GetMasterUserId();
            return await _service.CancelOrderItem(OrderMasterId, masteruserid);
        }
        [HttpGet]
        public async Task<ApiResponse> Profile()
        {
            int MasterUserId = User.Identity.GetMasterUserId();
            return await _service.MyProfile(MasterUserId);
        }
    }
}
