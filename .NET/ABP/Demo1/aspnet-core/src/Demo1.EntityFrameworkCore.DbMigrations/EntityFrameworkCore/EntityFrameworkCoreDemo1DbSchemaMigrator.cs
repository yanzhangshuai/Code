using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Demo1.Data;
using Volo.Abp.DependencyInjection;

namespace Demo1.EntityFrameworkCore
{
    public class EntityFrameworkCoreDemo1DbSchemaMigrator
        : IDemo1DbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreDemo1DbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the Demo1MigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<Demo1MigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}