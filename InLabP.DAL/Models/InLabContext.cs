using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InLabP.DAL.Models
{
    public class InLabContext : DbContext
    {
        public static string connectionString = @"Server=DESKTOP-ULV46EM\SQLEXPRESS;Database=InLab;Trusted_Connection=True;";
        public InLabContext(DbContextOptions<InLabContext> options) : base(options) { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionString);
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<News> Newses { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}
