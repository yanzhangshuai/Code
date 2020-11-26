using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo1
{
    class Program
    {
        static void Main(string[] args)
        {
            
            // Console.WriteLine("begin ...");
            // Console.WriteLine(SingletonSimple.X);
            // Console.WriteLine("end ...");
            //
            // Console.Read();
            // var a = new List<string> {"1","2"};
            // var b = new List<string> {"1","2","3"};
            // var c = new List<string> {"1","2","3","4"};
            // var d = new List<string> {"1","2","3","4"};
            // var res = A(new List<IList<string>>() {a, b,c,d});
            // foreach (var re in res)
            // {
            //     Console.WriteLine(re);
            // }
            //
            // object slot = new Slot() { ClothesName = "上衣" ,Age = 12};
            //
            // if(slot is Slot query && query.Age<15)
            // {
            //     Console.WriteLine($"slot is {nameof(Slot)}, ClothesName={query.ClothesName}");
            //     if (query.ClothesName is "上衣")
            //     {
            //         Console.WriteLine("Hello World!");
            //     }
            //
            //     if (query.ClothesName is not null and not "")
            //     {
            //         Console.WriteLine($"e={query.ClothesName}，模拟 !string.IsNullOrEmpty 功能");
            //     }
            //     
            //     if (query.Age is >10 and <15)
            //     {
            //         Console.WriteLine("我是10-15之间");
            //     }
            // }
        }

        private static IEnumerable<string> A(IList<IList<string>> data)
        {
            if (null == data)
            {
                return new List<string>();
            }
            if (data.Count == 1)
            {
                return data[0];
            }

            var intersectResult = data[0].Intersect(data[1]);
            for (var i = 2; i < data.Count; i ++)
            {
                intersectResult = data[i].Intersect(intersectResult);
            }

            return intersectResult;
            
        }
    }

    class Slot
    {
        public int Age { get; set; }
        public int SlotID { get; set; }

        public int ClothesID { get; set; }

        public string ClothesName { get; set; }

        public string SizeName { get; set; }
    }
    // class Foo
    // {
    //     public static string x = GetStr("初始化 Foo 静态成员字段"); //加入了静态字段或属性
    //     //public static String X { get; set; } = GetStr("初始化 Foo 静态成员字段");
    //     public static Foo CreateInstance { get;  } = new Foo();
    //     private Foo()
    //     {
    //         Console.WriteLine("创建了Foo实例");
    //     }
    //     public static String GetStr(String str)
    //     {
    //         Console.WriteLine(str);
    //         return str;
    //     }
    // }
    //
    public class SingletonSimple
    {
        static SingletonSimple()
        {
            Console.WriteLine($"Singleton Simple Create");
        }

        public static string X = "1";
        SingletonSimple()
        {
            Console.WriteLine($"Singleton Simple Create");
        }

      
        public static readonly SingletonSimple Instance = new SingletonSimple();
                
        public void Work()
        {
            Console.WriteLine("Singleton Simple Work");
        }
    }

    public class Demo
    {
        public async Task Demo2()
        {
             TaskDemo();
        }
        public async Task TaskDemo()
        {
             await Task.Run(() => { return "123";});
        }
    }

}