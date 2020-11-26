
using Microsoft.EntityFrameworkCore;

namespace PrivateCloud.EntityFrameworkCore
{
    public class PrivateCloudDbContext:DbContext
    {
        public PrivateCloudDbContext(DbContextOptions<PrivateCloudDbContext> options)
            : base(options)
        {
        }
        
    }
}