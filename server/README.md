# Server - C# .NET Backend

A modern C# .NET 9 Web API with Entity Framework Core, MySQL, and Swagger documentation.

## 🚀 Technologies Used

- **.NET 9** - Latest version of Microsoft's web framework
- **Entity Framework Core 9** - Object-relational mapping (ORM)
- **MySQL** - Relational database with Pomelo provider
- **Swagger/OpenAPI** - API documentation and testing
- **AutoMapper** - Object-to-object mapping
- **Global Usings** - Simplified namespace management

## 📁 Project Structure

```
server/
├── Controllers/      # API endpoint controllers
├── Models/          # Data entities and DTOs
├── Services/        # Business logic layer
├── Repositories/    # Data access layer
├── Migrations/      # EF Core database migrations
├── Properties/      # Launch settings and configuration
├── AppDbContext.cs  # Database context
├── Globals.cs       # Global usings and configuration
├── Program.cs       # Application entry point
└── migrate.sh       # Migration automation script
```

## 🛠️ Setup & Installation

### Prerequisites

- .NET 9 SDK
- MySQL Server 8.0+
- MySQL Workbench (optional, for database management)

### Installation Steps

1. **Install .NET 9 SDK:**

   - Download from [Microsoft .NET](https://dotnet.microsoft.com/download)

2. **Setup MySQL Database:**

   ```sql
   CREATE DATABASE fullstack_template;
   CREATE USER 'your_user'@'localhost' IDENTIFIED BY 'your_password';
   GRANT ALL PRIVILEGES ON fullstack_template.* TO 'your_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

3. **Environment Configuration:**

   ```bash
   # Set environment variables (or create .env file)
   export DB_SERVER=localhost
   export DB_DATABASE=fullstack_template
   export DB_USER=your_user
   export DB_PASSWORD=your_password
   export DB_PORT=3306
   ```

4. **Restore packages:**

   ```bash
   dotnet restore
   ```

5. **Run migrations:**

   ```bash
   # Option 1: Use the migration script
   chmod +x migrate.sh
   ./migrate.sh

   # Option 2: Manual migration
   dotnet ef migrations add InitialMigration
   dotnet ef database update
   ```

6. **Start the server:**

   ```bash
   dotnet run
   # or for development with hot reload
   dotnet watch run
   ```

7. **Access the API:**
   - API: `http://localhost:5000`
   - Swagger UI: `http://localhost:5000` (in development)

## 📜 Available Commands

- `dotnet run` - Start the server
- `dotnet watch run` - Start with hot reload
- `dotnet build` - Build the project
- `dotnet test` - Run tests (when added)
- `./migrate.sh` - Create and apply new migration

## 🔧 Configuration

### Environment Variables

Set these environment variables or create a `.env` file:

```bash
# Database Configuration
DB_SERVER=localhost
DB_DATABASE=fullstack_template
DB_USER=root
DB_PASSWORD=your-password
DB_PORT=3306

# API Configuration
ASPNETCORE_ENVIRONMENT=Development
ASPNETCORE_URLS=http://localhost:5000

# Optional API Keys
SOME_API_KEY=your-api-key-here
JWT_SECRET=your-jwt-secret-here
```

### Database Connection

The connection string is automatically built from environment variables in `Globals.cs`:

```csharp
public static string ConnectionString
{
    get
    {
        var server = Environment.GetEnvironmentVariable("DB_SERVER") ?? "localhost";
        var database = Environment.GetEnvironmentVariable("DB_DATABASE") ?? "fullstack_template";
        // ... other variables
        return $"Server={server};Database={database};User={user};Password={password};Port={port};SslMode=None";
    }
}
```

## 🏗️ Architecture

### Layered Architecture

1. **Controllers** - Handle HTTP requests and responses
2. **Services** - Contain business logic
3. **Repositories** - Handle data access
4. **Models** - Define data structures

### Example Implementation

```csharp
// Models/User.cs
public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Email { get; set; } = null!;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

// Controllers/UserController.cs
[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly AppDbContext _context;

    public UserController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        return await _context.Users.ToListAsync();
    }
}
```

## 💾 Database Operations

### Creating Migrations

```bash
# Create a new migration
dotnet ef migrations add MigrationName

# Apply migrations to database
dotnet ef database update

# Remove last migration (if not applied)
dotnet ef migrations remove
```

### Using the Migration Script

The included `migrate.sh` script automates migration creation:

```bash
./migrate.sh
# Creates timestamped migration and applies it
```

### Seeding Data

Add data seeding in `AppDbContext.cs`:

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Example>().HasData(
        new Example { Id = 1, Name = "Sample Data" }
    );
}
```

## 🔒 Security & CORS

### CORS Configuration

CORS is configured in `Program.cs` for development:

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowViteDevServer", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});
```

### Adding Authentication

To add JWT authentication:

1. **Install packages:**

   ```bash
   dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
   ```

2. **Configure in Program.cs:**
   ```csharp
   builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
       .AddJwtBearer(options => { /* JWT configuration */ });
   ```

## 📊 API Documentation

### Swagger/OpenAPI

- Swagger UI is available at the root URL in development
- API documentation is automatically generated from code comments
- Use data annotations for better documentation:

```csharp
[HttpGet("{id}")]
[ProducesResponseType(typeof(User), 200)]
[ProducesResponseType(404)]
public async Task<ActionResult<User>> GetUser(int id)
{
    // Implementation
}
```

## 🧪 Testing

### Setting Up Tests

```bash
# Create test project
dotnet new xunit -n FullstackTemplate.Tests
dotnet add FullstackTemplate.Tests/FullstackTemplate.Tests.csproj reference server.csproj

# Add test packages
dotnet add package Microsoft.AspNetCore.Mvc.Testing
dotnet add package Microsoft.EntityFrameworkCore.InMemory
```

### Example Test

```csharp
public class ExampleControllerTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> _factory;

    public ExampleControllerTests(WebApplicationFactory<Program> factory)
    {
        _factory = factory;
    }

    [Fact]
    public async Task GetExample_ReturnsSuccess()
    {
        var client = _factory.CreateClient();
        var response = await client.GetAsync("/example");
        response.EnsureSuccessStatusCode();
    }
}
```

## 🚨 Common Issues

### Database Connection Issues

1. **Check MySQL is running:**

   ```bash
   # macOS (Homebrew)
   brew services start mysql

   # Ubuntu/Debian
   sudo systemctl start mysql
   ```

2. **Verify connection string:**
   - Check environment variables
   - Test MySQL connection with MySQL Workbench
   - Ensure user has proper permissions

### Migration Issues

1. **Reset migrations:**

   ```bash
   # Drop database and recreate
   dotnet ef database drop
   dotnet ef migrations remove --force
   dotnet ef migrations add InitialMigration
   dotnet ef database update
   ```

2. **Connection timeout:**
   - Increase timeout in connection string
   - Check network connectivity to database

### CORS Issues

- Ensure frontend URL is included in CORS policy
- Check that CORS middleware is added before routing
- Verify frontend is making requests to correct URL

## 📚 Additional Resources

- [.NET Documentation](https://docs.microsoft.com/en-us/dotnet/)
- [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)
- [ASP.NET Core Web API](https://docs.microsoft.com/en-us/aspnet/core/web-api/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Pomelo EF Core Provider](https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql)
