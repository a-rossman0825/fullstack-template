namespace FullstackTemplate.Server;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    // Add DbSets here
    public DbSet<Example> Examples => Set<Example>();
}