using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace InLabP.DAL.Models
{
    public class Comment : Entity
    {
        public string Author { get; set; }
        public string Body { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModifyDate { get; set; }

        public int NewsId { get; set; }
        [ForeignKey("NewsId")]
        public News News { get; set; }
    }
}
