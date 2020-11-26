using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace Demo1.Pages
{
    public class Index_Tests : Demo1WebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
