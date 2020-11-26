using Volo.Abp.Modularity;

namespace Demo1
{
    [DependsOn(
        typeof(Demo1ApplicationModule),
        typeof(Demo1DomainTestModule)
        )]
    public class Demo1ApplicationTestModule : AbpModule
    {

    }
}