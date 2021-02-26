using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPI.Interface
{
    public interface IUnitOfWork : IDisposable
    {
        IUsersRepository Users { get; }
        Task<int> CommitAsync();
    }
}
