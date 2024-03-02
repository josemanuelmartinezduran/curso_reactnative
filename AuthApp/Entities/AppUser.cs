using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthApp.Entities
{
    public class AppUser
    {
        public string Username { get; set; }

        public string Password { get; set; }

        public int Id { get; set; }
    }
}