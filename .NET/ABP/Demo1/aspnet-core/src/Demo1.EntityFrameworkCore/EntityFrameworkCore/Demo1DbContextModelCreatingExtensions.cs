using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace Demo1.EntityFrameworkCore
{
    public static class Demo1DbContextModelCreatingExtensions
    {
        public static void ConfigureDemo1(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(Demo1Consts.DbTablePrefix + "YourEntities", Demo1Consts.DbSchema);

            //    //...
            //});
        }
    }
}