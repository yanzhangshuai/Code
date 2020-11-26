using System.Threading.Tasks;

namespace Acme.MySQL.Data
{
    public interface IMySQLDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
