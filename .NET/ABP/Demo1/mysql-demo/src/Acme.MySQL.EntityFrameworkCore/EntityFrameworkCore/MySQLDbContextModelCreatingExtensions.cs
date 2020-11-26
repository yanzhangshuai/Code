using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace Acme.MySQL.EntityFrameworkCore
{
    public static class MySQLDbContextModelCreatingExtensions
    {
        public static void ConfigureMySQL(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(MySQLConsts.DbTablePrefix + "YourEntities", MySQLConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}