using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace InLabP.Controllers
{
    public class HomeController : Controller
    {
        private InLabContext _context;
        public HomeController(InLabContext context)
        {
            _context = context;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public JsonResult GetNewses()
        {
            var model = new List<News>();
            model.Add(new News {Title="title1", Body = "INter Mediolan", Id = 1});
            model.Add(new News { Title = "title2", Body = "sdfwef", Id =2 });
            model.Add(new News { Title = "title3", Body = "wefwefwef", Id = 3 });
            model.Add(new News { Title = "title41", Body = "vwefwe fw wef ", Id = 4 });
            model.Add(new News { Title = "title5", Body = "ewef wef werwe efw weewf ", Id = 5});

            var modelFromDb = _context.Newses.Where(x => x.IsActive).ToList();

            return Json(new { data = modelFromDb });
        }

        public JsonResult GetCategories()
        {
            var model = _context.Categories.Where(x => x.IsActive).ToList();
            return Json(new { data = model });            
        }

        public JsonResult GetNewsesForSelectedCategory(int id)
        {
            var model =  _context.Newses.Where(x => x.CategoryId == id).ToList();
            return Json(new { data = model });
        }

        public JsonResult GetNewsDetails(int? id)
        {
            var model = _context.Newses.Where(x => x.Id == id).SingleOrDefault();
            return Json(new { data = model });
        }
    }
}
