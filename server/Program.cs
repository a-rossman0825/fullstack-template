using FullstackTemplate.Server;

var builder = WebApplication.CreateBuilder(args);

// Add CORS policy for development
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowViteDevServer", policy =>
    {
        policy.WithOrigins("http://localhost:5173", "http://localhost:3000", "http://127.0.0.1:5173")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

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

// Enable CORS
app.UseCors("AllowViteDevServer");

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