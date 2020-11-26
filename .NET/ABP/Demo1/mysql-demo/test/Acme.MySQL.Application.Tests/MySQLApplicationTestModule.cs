using Volo.Abp.Modularity;

namespace Acme.MySQL
{
    [DependsOn(
        typeof(MySQLApplicationModule),
        typeof(MySQLDomainTestModule)
        )]
    public class MySQLApplicationTestModule : AbpModule
    {

    }
}