using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.DependencyInjection;

namespace Console_Start
{
    class Program
    {
        static void Main(string[] args)
        {

            using (var application = AbpApplicationFactory.Create<AppModule>())
            {
              // 解析服务并使用它
              var helloWorldService = 
                  application.ServiceProvider.GetService<HelloWorldService>();
              helloWorldService.SayHello();
              application.Initialize();

              Console.WriteLine("Press ENTER to stop application...");
            }
        }
    }
    
    public class HelloWorldService : ITransientDependency
    {
        public void SayHello()
        {
            Console.WriteLine("Hello World!");
        }
    }
}