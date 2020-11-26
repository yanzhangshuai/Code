using System;
using System.Collections.Generic;
using System.Text;
using Acme.MySQL.Localization;
using Volo.Abp.Application.Services;

namespace Acme.MySQL
{
    /* Inherit your application services from this class.
     */
    public abstract class MySQLAppService : ApplicationService
    {
        protected MySQLAppService()
        {
            LocalizationResource = typeof(MySQLResource);
        }
    }
}
