using System;
using System.Threading;
using System.Threading.Tasks;

namespace Demo1
{
    class Program
    {
        static async Task Main(string[] args)
          {
        // Console.WriteLine("------------Test01Aysnc------------");
        // await Test01Aysnc();
        // Console.WriteLine("------------Test01Aysnc------------");
        // // Console.ReadKey();
        // Console.WriteLine("------------Test02Aysnc------------");
        Test02();
        // Console.WriteLine("------------Test02Aysnc------------");
        Console.ReadKey();
            // Console.WriteLine("------------Test03Aysnc------------");
            // await Test03Aysnc();
            // Console.WriteLine("------------Test03Aysnc------------");
            // Console.ReadKey();
        }

        /// <summary>
        /// 5个方法被依次调用，i会传不同的值，并且都是相隔i秒
        /// </summary>
        /// <returns></returns>
        static async Task Test01Aysnc()
        {
            for (int i = 1; i <= 5; i++)
            {
                await Task.Run(async () =>
                {
                    var result = await TestMethodAsync(i);
                    Console.WriteLine($"结果：{ result} {DateTime.Now}");
                    // Console.WriteLine($"循环内  allresult={allresult.ToString() }  {DateTime.Now}");
                },new CancellationTokenSource().Token);
            }
            
            // Console.WriteLine($"allresult={allresult.ToString() }  {DateTime.Now}");

        }
        /// <summary>
        /// 5个方法同时被调起，并且i为最大值
        /// </summary>
        /// <returns></returns>
        static void Test02()
        {
            for (var i = 1; i <= 5; i++)
            {
                var item = i;
                var func = new Action(async () =>
                {
                    await TestMethodAsync(item);
                });
                Task task = new Task(func);
                task.Start();
            }
        }
        
        
        /// <summary>
        /// 5个方法同时被调用，i会分别传值
        /// </summary>
        /// <returns></returns>
        static async Task Test03Aysnc()
        {
            var allresult = true;
            for (int i = 1; i <= 5; i++)
            {
                await Task.Factory.StartNew(async () =>
                 {
                     var result = await TestMethodAsync(i);
                     Console.WriteLine($"结果：{ result} {DateTime.Now}");
                 },new CancellationTokenSource().Token, TaskCreationOptions.DenyChildAttach,TaskScheduler.Default);
            }
        }
        /// <summary>
        /// 被调用的异步方法
        /// </summary>
        /// <param name="i"></param>
        /// <returns></returns>
        static async Task<bool> TestMethodAsync(int i)
        {
            try
            {
                Console.WriteLine($"F开始 i={i} {DateTime.Now}");
                await Task.Delay( 1000);
               
                Console.WriteLine($"F结束 i={i}  {DateTime.Now}==================");
                return await Task.FromResult(true);
            }
            catch (Exception exc)
            {
                Console.WriteLine($"F异常 i={i} {exc.Message} {DateTime.Now}");
                return await Task.FromResult(false);
            }
        }
    }
}
