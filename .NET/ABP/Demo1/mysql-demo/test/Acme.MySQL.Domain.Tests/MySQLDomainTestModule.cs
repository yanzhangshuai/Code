using Acme.MySQL.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Acme.MySQL
{
    [DependsOn(
        typeof(MySQLEntityFrameworkCoreTestModule)
        )]
    public class MySQLDomainTestModule : AbpModule
    {

    }
}