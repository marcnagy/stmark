 using Microsoft.EntityFrameworkCore;

namespace stMarkosChurchAPI.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<SigninModel> SigninModels => Set<SigninModel>();
    }
}
