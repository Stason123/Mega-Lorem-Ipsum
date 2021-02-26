using Microsoft.EntityFrameworkCore;
using RestAPI.Interface;
using RestAPI.Model;

namespace RestAPI.Repositories
{
    public class UsersRepository : BaseRepository<Users>, IUsersRepository
    {
        protected readonly DbContext Context;

        public UsersRepository(DbContext context) : base(context)
        {
            this.Context = context;
        }

        private dbContext dbContext
        {
            get { return Context as dbContext; }
        }

    }
}
