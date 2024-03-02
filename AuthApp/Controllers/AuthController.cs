using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AuthApp.Entities;
using AuthApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace AuthApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly DataContext context;

        public AuthController(DataContext context)
        {
            this.context = context;
        }


        [HttpGet]
        public ActionResult<IEnumerable<AppUser>> GetUsers(){
            List<AppUser> users = this.context.Users.ToList();
            return users;
        }

        [HttpGet("{id}")]
        public ActionResult<AppUser> GetUser(int id){
            AppUser user = this.context.Users.Find(id);
            return user;
        }
    }
}