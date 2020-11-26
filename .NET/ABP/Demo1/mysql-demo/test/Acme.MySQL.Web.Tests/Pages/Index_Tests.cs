﻿using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace Acme.MySQL.Pages
{
    public class Index_Tests : MySQLWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
