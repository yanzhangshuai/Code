using Acme.MySQL.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace Acme.MySQL.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(MySQLEntityFrameworkCoreDbMigrationsModule),
        typeof(MySQLApplicationContractsModule)
        )]
    public class MySQLDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
