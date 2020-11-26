using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace Acme.MySQL.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(MySQLHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class MySQLConsoleApiClientModule : AbpModule
    {
        
    }
}
