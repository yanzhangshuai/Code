using System;
using System.IO;
using System.Threading.Tasks;
using Minio;
using RestSharp.Extensions;

namespace MinIODemo
{
    class Program
    {
        private static MinioClient minio = new MinioClient("172.21.11.30:9000",
            "minioadmin",
            "minioadmin"
        );
        static async Task Main(string[] args)
        {
            var bucketName = "bucket-name";

            if (! await  minio.BucketExistsAsync(bucketName))
            {
                await minio.MakeBucketAsync(bucketName);
            }

            // await minio.PutObjectAsync(bucketName, "demo1", @"C:\Users\17727\Pictures\Saved Pictures\1.jpg",
            //     "image/pjpeg");
            await minio.GetObjectAsync(bucketName, "demo1", file =>
            {
                File.WriteAllBytes(@"C:\Users\17727\Pictures\Saved Pictures\2.jpg",file.ReadAsBytes());
            });
            Console.WriteLine("OK");

        }
    }
}
