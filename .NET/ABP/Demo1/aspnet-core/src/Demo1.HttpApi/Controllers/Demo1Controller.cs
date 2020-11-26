using Demo1.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Demo1.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class Demo1Controller : AbpController
    {
        protected Demo1Controller()
        {
            LocalizationResource = typeof(Demo1Resource);
        }
    }
}