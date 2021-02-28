using System.Linq;
using Microsoft.EntityFrameworkCore;
using RestAPI.Interface;
using RestAPI.Model;

namespace RestAPI.Repositories
{
    public class UsersRepository : BaseRepository<Users>, IUsersRepository
    {
        protected readonly dbContext _context;

        public UsersRepository(dbContext context) : base(context)
        {
            _context = context;
        }

        public int GetLastUserId()
        {
            var orderByDescendingResult = from s in _context.Users
                orderby s.Id descending
                select s.Id;
            return orderByDescendingResult.FirstOrDefault();
        }

    }
}
