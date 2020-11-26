using Acme.MySQL.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Acme.MySQL.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class MySQLPageModel : AbpPageModel
    {
        protected MySQLPageModel()
        {
            LocalizationResourceType = typeof(MySQLResource);
        }
    }
}