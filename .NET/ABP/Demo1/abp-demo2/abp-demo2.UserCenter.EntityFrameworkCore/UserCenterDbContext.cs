using abp_demo2.UserCenter.Domain;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace abp_demo2.UserCenter.EntityFrameworkCore
{
    [ConnectionStringName("Default")]
    public class UserCenterDbContext:AbpDbContext<UserCenterDbContext>
    {
        public UserCenterDbContext(DbContextOptions<UserCenterDbContext> options) : base(options)
        {
        }
        public DbSet<UserData> UserData { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
        
    }
}