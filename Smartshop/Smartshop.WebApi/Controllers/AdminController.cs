using iTextSharp.text;
using iTextSharp.text.pdf;
using Smartshop.Service.Interfaces;
using Smartshop.ViewModels.Models;
using Smartshop.ViewModels.Models.Admin;
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
    public class AdminController : ApiController
    {
        private readonly IAdminServices _admin;
        public AdminController(IAdminServices admin)
        {
            _admin = admin;
        }
        [HttpGet]
        public async Task<ApiResponse> GetAllSellerApproveRequest()
        {
            return await _admin.GetAllSellerApproveRequest();
        }
        [HttpPost]
        public async Task<ApiResponse> ApproveSellerRequestBySellerId(int SellerId)
        {
            return await _admin.ApproveSellerRequestBySellerId(SellerId);
        }
        [HttpPost]
        public async Task<ApiResponse> RejectSellerRequestBySellerId(int SellerId)
        {
            return await _admin.RejectSellerRequestBySellerId(SellerId);
        }
        [HttpGet]
        public async Task<ApiResponse> GetAllActivatedUsers()
        {
            return await _admin.GetAllActivatedUsers();
        }
        [HttpGet]
        public async Task<ApiResponse> GetAllDeactivatedUsers()
        {
            return await _admin.GetAllDeactivatedUsers();
        }
        [HttpPost]
        public async Task<ApiResponse> ActivateUserByMasterUserId(int MasterUserId)
        {
            return await _admin.ActivateUserByMasterUserId(MasterUserId);
        }
        [HttpPost]
        public async Task<ApiResponse> DeactivateUserByMasterUserId(int MasterUserId)
        {
            return await _admin.DeactivateUserByMasterUserId(MasterUserId);
        }
        [HttpGet]
        public void AdminSellerPdf()
        {
            List<Sellerpdfforadmin> list = _admin.GetSellerPdfForAdmin();
            DataTable table = new DataTable(typeof(Sellerpdfforadmin).ToString());
            PropertyInfo[] props = typeof(Sellerpdfforadmin).GetProperties(BindingFlags.Public | BindingFlags.Instance);
            table.Columns.Add("SellerId");
            table.Columns.Add("ProductName");
            table.Columns.Add("Status");
            table.Columns.Add("Payment Status");
            foreach (Sellerpdfforadmin item in list)
            {
                var values = new object[props.Length];
                for (int i = 0; i < props.Length; i++)
                {
                    values[i] = props[i].GetValue(item, null);
                }
                table.Rows.Add(values);
            }
            string path = @"D:\SellerPdfForAdmin" + Guid.NewGuid().ToString().Substring(0, 6) + ".pdf";
            ExporttoPdf(table, path, "Seller data");
            System.Diagnostics.Process.Start(path);
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
        public void AdminBuyerPdf()
        {
            List<Buyerpdfforadmin> list = _admin.GetBuyerPdfForAdmin();
            DataTable table = new DataTable(typeof(Buyerpdfforadmin).ToString());
            PropertyInfo[] props = typeof(Buyerpdfforadmin).GetProperties(BindingFlags.Public | BindingFlags.Instance);
            foreach (PropertyInfo prop in props)
            {
                table.Columns.Add(prop.Name);
            }
            foreach (Buyerpdfforadmin item in list)
            {
                var values = new object[props.Length];
                for (int i = 0; i < props.Length; i++)
                {
                    values[i] = props[i].GetValue(item, null);
                }
                table.Rows.Add(values);
            }
            string path = @"D:\BuyerPdfForAdmin" + Guid.NewGuid().ToString().Substring(0, 6) + ".pdf";
            ExporttoPdf(table, path, "Seller data");
            System.Diagnostics.Process.Start(path);
        }
    }
}
