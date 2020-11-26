using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Acme.MySQL.Data
{
    /* This is used if database provider does't define
     * IMySQLDbSchemaMigrator implementation.
     */
    public class NullMySQLDbSchemaMigrator : IMySQLDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}