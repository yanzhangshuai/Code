using System.Linq;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;
using Volo.Abp.Identity.Settings;
using Volo.Abp.Modularity;

namespace abp_demo2.UserCenter.Domain
{
    [DependsOn(typeof(AbpIdentityDomainModule))]
    public class UserCenterDomainModule:AbpModule
    {    
        //private IRepository<IdentitySettingNames.User, int> a;
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            base.OnApplicationInitialization(context);
        }
    }
}