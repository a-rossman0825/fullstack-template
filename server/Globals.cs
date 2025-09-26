// Global usings
global using System;
global using System.Collections.Generic;
global using System.Linq;
global using System.Threading.Tasks;

global using Microsoft.EntityFrameworkCore;
global using Microsoft.AspNetCore.Builder;
global using Microsoft.Extensions.DependencyInjection;
global using Microsoft.Extensions.Hosting;

global using FullstackTemplate.Server.Models;
// global using FullstackTemplate.Server.Controllers;
// global using FullstackTemplate.Server.Services;
// global using FullstackTemplate.Server.Repositories;

namespace FullstackTemplate.Server
{
    public static class AppGlobals
    {
        public static string ConnectionString
        {
            get
            {
                var server = Environment.GetEnvironmentVariable("DB_SERVER") ?? "localhost";
                var database = Environment.GetEnvironmentVariable("DB_DATABASE") ?? "fullstack_template";
                var user = Environment.GetEnvironmentVariable("DB_USER") ?? "root";
                var password = Environment.GetEnvironmentVariable("DB_PASSWORD") ?? "";
                var port = Environment.GetEnvironmentVariable("DB_PORT") ?? "3306";

                return $"Server={server};Database={database};User={user};Password={password};Port={port};SslMode=None";
            }
        }

        public static string SomeApiKey => Environment.GetEnvironmentVariable("SOME_API_KEY") ?? "";
    }
}