using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InLabPDAL.Models
{
    public class Category : Entity
    {
        public string Name { get; set; }
        public IEnumerable<News> Newses { get; set; }
    }
}
