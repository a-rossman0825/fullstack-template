# Fullstack Template - Vue.js + C# .NET

A modern, developer-friendly fullstack template combining Vue.js 3 with TypeScript frontend and C# .NET 9 backend with Entity Framework Core.

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** and npm/yarn
- **.NET 9 SDK**
- **MySQL 8.0+**

### 1. Clone and Setup

```bash
# Clone the template repository with your desired project name
git clone https://github.com/a-rossman0825/fullstack-template.git my-awesome-project
cd my-awesome-project

# Setup backend
cd server
cp .env.example .env
# Edit .env with your database credentials
dotnet restore
./migrate.sh
dotnet run

# Setup frontend (in a new terminal)
cd ../client
npm install
cp .env.example .env.local
# Edit .env.local if needed
npm run dev
```

### 2. Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000 (Swagger UI)

## 🛠️ Tech Stack

### Frontend (`/client`)

- **Vue.js 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Vue Router** - Client-side routing
- **Bootstrap 5** - CSS framework
- **SASS** - CSS preprocessing
- **Axios** - HTTP client

### Backend (`/server`)

- **C# .NET 9** - Web API framework
- **Entity Framework Core** - ORM
- **MySQL** - Database
- **Swagger** - API documentation
- **AutoMapper** - Object mapping

## 📁 Project Structure

```
fullstack-template/
├── client/                 # Vue.js frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Route components
│   │   ├── services/      # API services
│   │   ├── router/        # Vue Router config
│   │   └── utils/         # Utilities
│   ├── package.json
│   └── vite.config.ts
├── server/                 # C# .NET backend
│   ├── Controllers/        # API controllers
│   ├── Models/            # Data entities
│   ├── Services/          # Business logic
│   ├── Repositories/      # Data access
│   ├── Migrations/        # EF migrations
│   ├── Program.cs         # Entry point
│   └── server.csproj
└── README.md              # This file
```

## 🎯 Features

### ✅ Included Out of the Box

- **Modern Frontend**: Vue 3 with Composition API and TypeScript
- **Responsive Design**: Bootstrap 5 with custom SASS styling
- **Type Safety**: Full TypeScript support on frontend
- **API Integration**: Configured Axios service with error handling
- **Routing**: Vue Router with example pages
- **Database**: EF Core with MySQL and migrations
- **API Documentation**: Swagger/OpenAPI integration
- **Development Tools**: ESLint, Prettier, hot reload
- **CORS**: Configured for frontend-backend communication
- **Environment Configuration**: Flexible env variable setup

### 📦 Ready to Add

- Authentication (JWT/OAuth)
- State management (Pinia included)
- Unit testing
- Docker containerization
- CI/CD pipelines

## 🏃‍♂️ Development Workflow

### Frontend Development

```bash
cd client

# Start development server
npm run dev

# Build for production
npm run build

# Lint and fix code
npm run lint:fix
```

### Backend Development

```bash
cd server

# Run with hot reload
dotnet watch run

# Create new migration
dotnet ef migrations add MigrationName

# Update database
dotnet ef database update

# Or use the convenience script
./migrate.sh
```

## 🔧 Configuration

### Environment Variables

**Client (`.env.local`)**:

```bash
VITE_API_BASE_URL=http://localhost:5000
```

**Server (`.env` or environment)**:

```bash
DB_SERVER=localhost
DB_DATABASE=fullstack_template
DB_USER=root
DB_PASSWORD=your-password
ASPNETCORE_URLS=http://localhost:5000
```

### Database Setup

1. **Create MySQL database:**

   ```sql
   CREATE DATABASE fullstack_template;
   ```

2. **Run migrations:**
   ```bash
   cd server
   ./migrate.sh
   ```

## 🚀 Deployment

### Frontend (Static Hosting)

```bash
cd client
npm run build
# Deploy dist/ folder to your static host
```

### Backend (Docker)

```dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY . .
EXPOSE 80
ENTRYPOINT ["dotnet", "server.dll"]
```

## 🧪 Adding New Features

### 1. Add a New API Endpoint

```csharp
// server/Controllers/UserController.cs
[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    [HttpGet]
    public IActionResult GetUsers()
    {
        return Ok(new { users = "data" });
    }
}
```

### 2. Add a New Frontend Page

```bash
# Create page component
touch client/src/pages/UsersPage.vue

# Add route
# Edit client/src/router/index.ts
```

### 3. Add Database Entity

```csharp
// server/Models/User.cs
public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
}

// Add to AppDbContext.cs
public DbSet<User> Users => Set<User>();

// Create migration
dotnet ef migrations add AddUsers
dotnet ef database update
```

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure backend CORS is configured and frontend is using correct API URL
2. **Database Connection**: Check MySQL is running and credentials are correct
3. **Port Conflicts**: Change ports in configuration if 5000/5173 are in use
4. **TypeScript Errors**: Run `npm run build` to check for type issues

### Getting Help

- Check the individual README files in `/client` and `/server` folders
- Review the example implementations in the codebase
- Consult the technology documentation linked in each README

## 📚 Learning Resources

- [Vue.js 3 Guide](https://vuejs.org/guide/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [.NET Web API Tutorial](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api)
- [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy coding! 🎉**

This template provides a solid foundation for modern fullstack development. Feel free to customize it according to your project needs.
