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

        [Route("[action]")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Users>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }


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


        [HttpPut("[action]/{id}")]
        public async Task<IActionResult> PutUser(int id, Users users)
        {
            if (id != users.Id)
            {
                return BadRequest();
            }

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

        [HttpPost("[action]")]
        public async Task<ActionResult<Users>> PostUser(Users user)
        {
            var lastUserId = _uow.Users.GetLastUserId();
            var userId = lastUserId > 0 ? lastUserId + 1 : 0 + 1;
            user.DateOfBirth = user.DateOfBirth.Value.AddDays(1);
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
