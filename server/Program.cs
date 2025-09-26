using FullstackTemplate.Server;

var builder = WebApplication.CreateBuilder(args);

// Add DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(AppGlobals.ConnectionString, ServerVersion.AutoDetect(AppGlobals.ConnectionString))
);

// Add controllers
builder.Services.AddControllers();

// Add Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Enable Swagger UI in development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "FullstackTemplate API v1");
        c.RoutePrefix = ""; // Optional: serve Swagger UI at root
    });
}

app.UseRouting();

app.MapControllers();

app.Run();