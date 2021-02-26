using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RestAPI.Interface;
using RestAPI.Model;
using RestAPI.Repositories;

namespace RestAPI.UOW
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly dbContext _context;
        private UsersRepository _usersRepository;

        public UnitOfWork(dbContext context)
        {
            _context = context;
        }

        public IUsersRepository Users => _usersRepository = _usersRepository ?? new UsersRepository(_context);


        public async Task<int> CommitAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
