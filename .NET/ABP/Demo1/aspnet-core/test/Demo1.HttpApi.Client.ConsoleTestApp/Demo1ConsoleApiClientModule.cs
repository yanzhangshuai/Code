using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace Demo1.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(Demo1HttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class Demo1ConsoleApiClientModule : AbpModule
    {
        
    }
}
