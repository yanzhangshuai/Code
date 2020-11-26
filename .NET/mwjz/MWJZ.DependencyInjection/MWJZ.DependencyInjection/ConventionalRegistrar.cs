using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Extensions.DependencyModel;
using Microsoft.Extensions.DependencyModel.Resolution;

namespace MWJZ.DependencyInjection
{
    public class ConventionalRegistrar
    {
        public static CompilationLibrary[] GetAllLibrary()
        {
            return
                DependencyContext.Default.CompileLibraries.Where(y =>
                    !y.Name.StartsWith("System.") && !y.Name.StartsWith("Microsoft.")).ToArray();
        }

        public static IList<string> GetAllAssembly()
        {
            return Directory.GetFileSystemEntries(Directory.GetCurrentDirectory())
                .Select(Path.GetFileName)
                .Where(file => file.EndsWith(".dll") && !file.StartsWith("System.") && !file.StartsWith("Microsoft."))
                .ToList();
        }
    }
}