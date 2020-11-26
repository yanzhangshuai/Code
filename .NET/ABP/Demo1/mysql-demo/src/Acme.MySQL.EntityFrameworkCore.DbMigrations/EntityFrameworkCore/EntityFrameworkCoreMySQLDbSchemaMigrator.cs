using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Acme.MySQL.Data;
using Volo.Abp.DependencyInjection;

namespace Acme.MySQL.EntityFrameworkCore
{
    public class EntityFrameworkCoreMySQLDbSchemaMigrator
        : IMySQLDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreMySQLDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the MySQLMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<MySQLMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}