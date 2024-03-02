using AuthApp.Entities;
using Microsoft.EntityFrameworkCore;

namespace AuthApp.Models {
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> Users { get; set; }
    }
}

