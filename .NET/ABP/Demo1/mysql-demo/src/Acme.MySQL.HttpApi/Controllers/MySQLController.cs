using Acme.MySQL.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Acme.MySQL.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class MySQLController : AbpController
    {
        protected MySQLController()
        {
            LocalizationResource = typeof(MySQLResource);
        }
    }
}