using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace Demo1.EntityFrameworkCore
{
    [DependsOn(
        typeof(Demo1EntityFrameworkCoreModule)
        )]
    public class Demo1EntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<Demo1MigrationsDbContext>();
        }
    }
}
