using Demo1.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace Demo1.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(Demo1EntityFrameworkCoreDbMigrationsModule),
        typeof(Demo1ApplicationContractsModule)
        )]
    public class Demo1DbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
