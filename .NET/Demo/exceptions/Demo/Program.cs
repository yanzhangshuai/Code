﻿using System;
using System.Security.Permissions;

namespace Demo
{
    class Program
    {
        [SecurityPermission(SecurityAction.Demand,Flags = SecurityPermissionFlag.ControlAppDomain)]
        static void Main(string[] args)
        {
            AppDomain currentDomain = AppDomain.CurrentDomain;
            currentDomain.UnhandledException += new UnhandledExceptionEventHandler(MyHandler);
            try
            { throw new Exception("1");
                Console.WriteLine("Hello World!");
            }
            catch (Exception e)
            {
                System.Console.WriteLine(e);
            }
          throw new Exception("2");

        }
        static void MyHandler(object sender, UnhandledExceptionEventArgs args)
        {
            Exception e = (Exception) args.ExceptionObject;
            Console.WriteLine("MyHandler caught : " + e);
            Console.WriteLine("Runtime terminating: {0}", args.IsTerminating);
        }
    }
}