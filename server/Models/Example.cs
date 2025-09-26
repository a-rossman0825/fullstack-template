namespace FullstackTemplate.Server.Models;

public class Example
{
    public int Id { get; set; }          // Primary key
    public string Name { get; set; } = null!;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}