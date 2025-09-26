using Microsoft.AspNetCore.Mvc;

namespace FullstackTemplate.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class ExampleController : ControllerBase
{
    [HttpGet]
    public IActionResult GetExample()
    {
        return Ok(new { Message = "Hello from the template!" });
    }
}