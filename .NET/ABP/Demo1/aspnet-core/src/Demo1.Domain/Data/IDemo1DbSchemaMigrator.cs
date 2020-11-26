using System.Threading.Tasks;

namespace Demo1.Data
{
    public interface IDemo1DbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
