using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestAPI.Interface;
using RestAPI.Model;

namespace RestAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly dbContext _context;
        private readonly IUnitOfWork _uow;

        public UsersController(dbContext context, IUnitOfWork unitOfWork)
        {
            _context = context;
            _uow = unitOfWork;
        }

        // GET: api/Users
        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Users>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<Users>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> PutUser(int id, Users users)
        {
            if (id != users.Id)
            {
                return BadRequest();
            }
            //var dateTime = users.DateOfBirth?.ToString("yyyy-MM-dd");
            //users.DateOfBirth = Convert.ToDateTime(dateTime);
            users.DateOfBirth = users.DateOfBirth.Value.AddDays(1);
            _context.Entry(users).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost("[action]")]
        public async Task<ActionResult<Users>> PostUser(Users user)
        {
            var lastUserId = _uow.Users.GetLastUserId();
            var userId = lastUserId > 0 ? lastUserId + 1 : 0 + 1;

            var model = new Users
            {
                Id = userId,
                Name = user.Name,
                Surname = user.Surname,
                Email = user.Email,
                DateOfBirth = user.DateOfBirth,
                Gender = user.Gender
            };
            _context.Users.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsers", new { id = userId }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("[action]/{id}")]
        public async Task<ActionResult<Users>> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
