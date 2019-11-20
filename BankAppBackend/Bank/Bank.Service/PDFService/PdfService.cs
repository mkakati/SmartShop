//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace Bank.Service.PDFService
//{
//    public class PdfService
//    {
//        protected void Page_Load(object sender, EventArgs e)
//        {
//            if (!IsPostBack)
//            {
//                BindEmployeesDropDown();
//            }
//        }
//        private void BindEmployeesDropDown()
//        {
//            ddlEmployees.DataSource = GetData("SELECT EmployeeId, (FirstName + ' ' + LastName) Name FROM Employees");
//            ddlEmployees.DataTextField = "Name";
//            ddlEmployees.DataValueField = "EmployeeId";
//            ddlEmployees.DataBind();
//        }
//        private DataTable GetData(string query)
//        {
//            string conString = ConfigurationManager.ConnectionStrings["constr"].ConnectionString;
//            SqlCommand cmd = new SqlCommand(query);
//            using (SqlConnection con = new SqlConnection(conString))
//            {
//                using (SqlDataAdapter sda = new SqlDataAdapter())
//                {
//                    cmd.Connection = con;

//                    sda.SelectCommand = cmd;
//                    using (DataTable dt = new DataTable())
//                    {
//                        sda.Fill(dt);
//                        return dt;
//                    }
//                }
//            }
//        }
//    }
//}