using Demo1.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Demo1
{
    [DependsOn(
        typeof(Demo1EntityFrameworkCoreTestModule)
        )]
    public class Demo1DomainTestModule : AbpModule
    {

    }
}