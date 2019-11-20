[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(Smartshop.WebApi.App_Start.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(Smartshop.WebApi.App_Start.NinjectWebCommon), "Stop")]

namespace Smartshop.WebApi.App_Start
{
    using System;
    using System.Web;

    using Microsoft.Web.Infrastructure.DynamicModuleHelper;

    using Ninject;
    using Ninject.Web.Common;
    using Ninject.Web.Common.WebHost;
    using Smartshop.Service.Interfaces;
    using Smartshop.Service.Classes;
    using Smartshop.DataAccess.Repository;
    using Smartshop.DataAccess.Repository.SellerRepo;

    public static class NinjectWebCommon 
    {
        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start() 
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            bootstrapper.Initialize(CreateKernel);
        }
        
        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }
        
        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            try
            {
                kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();
                RegisterServices(kernel);
                return kernel;
            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {
            //kernel.Bind<Itest>().To<test>();
            kernel.Bind<IAccountServices>().To<AccountServices>();
            kernel.Bind<IAuthRepository>().To<AuthRepository>();
            kernel.Bind<IBuyerRepository>().To<BuyerRepository>();
            kernel.Bind<IBuyerServices>().To<BuyerServices>();
            kernel.Bind<IAdminRepository>().To<AdminRepository>();
            kernel.Bind<IAdminServices>().To<AdminServices>();

            kernel.Bind<IProductRepository>().To<ProductRepository>();
            kernel.Bind<IProductServices>().To<ProductServices>();
            kernel.Bind<IAddressRepository>().To<AddressRepository>();
            kernel.Bind<IAddressServices>().To<AddressServices>();

           
            kernel.Bind<ISellerServices>().To<SellerServices>();
            kernel.Bind<ISellerRepository>().To<SellerRepository>();
        }        
    }
}