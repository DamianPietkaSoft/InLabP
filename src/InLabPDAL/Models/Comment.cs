using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace InLabPDAL.Models
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
