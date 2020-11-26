using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace Acme.MySQL.EntityFrameworkCore
{
    [DependsOn(
        typeof(MySQLEntityFrameworkCoreModule)
        )]
    public class MySQLEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<MySQLMigrationsDbContext>();
        }
    }
}
