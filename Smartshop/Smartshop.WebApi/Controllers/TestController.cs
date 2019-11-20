using Smartshop.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Smartshop.WebApi.Controllers
{
    public class TestController : ApiController
    {
        //private readonly Itest _test;
        public TestController()
        {
            //_test = test;
        }
        [HttpGet]
        public IHttpActionResult testcont()
        {
            //string s= _test.test();
            dynamic testing =new
            {
                name="bhsj",
                pass="sddsd"
            };
            return Ok(testing);
        }
    }
}
