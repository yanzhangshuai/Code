using System;
using System.Collections.Concurrent;
using System.Collections.Immutable;
using System.Reflection;

namespace MWJZ.DependencyInjection
{
    internal class DependencyAssemblyCache
    {
        private static readonly Lazy<DependencyAssemblyCache> Lazy =
            new Lazy<DependencyAssemblyCache>(() => new DependencyAssemblyCache());

        private readonly ConcurrentBag<Assembly> _assemblies = new ConcurrentBag<Assembly>();

        public static DependencyAssemblyCache Current { get; } = Lazy.Value;

        public DependencyAssemblyCache()
        {
            foreach (var library in ConventionalRegistrar.GetAllAssembly())
            {
                Console.WriteLine(library);
                AddAssembly(Assembly.Load(library));
            }
        }
        public void AddAssembly(Assembly assembly)
        {
            _assemblies.Add(assembly);
        }

        public Assembly[] GetAllAssembly()
        {
            return _assemblies.ToArray();
        }
    }
}