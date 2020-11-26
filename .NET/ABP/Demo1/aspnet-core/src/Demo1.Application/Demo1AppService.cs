using System;
using System.Collections.Generic;
using System.Text;
using Demo1.Localization;
using Volo.Abp.Application.Services;

namespace Demo1
{
    /* Inherit your application services from this class.
     */
    public abstract class Demo1AppService : ApplicationService
    {
        protected Demo1AppService()
        {
            LocalizationResource = typeof(Demo1Resource);
        }
    }
}
