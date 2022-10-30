using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using stMarkosChurchAPI.Data;
using System;

namespace stMarkosChurchAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SigninControllor : ControllerBase
    {
        private readonly DataContext _Context;
        public SigninControllor(DataContext Context)
        {
            _Context = Context;
        }


        [HttpGet]
        public async Task<ActionResult<List<SigninModel>>> getPerson()
        {
            return Ok(await _Context.SigninModels.ToListAsync());

        }
        [HttpPost]
        public async Task<ActionResult<List<SigninModel>>> SignUp(SigninModel person)
        {
            _Context.SigninModels.Add(person);
            await _Context.SaveChangesAsync();

            return Ok(await _Context.SigninModels.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<SigninModel>>> updatePerson(SigninModel person)
        {
            var dbP = await _Context.SigninModels.FindAsync(person.ID);
            if (dbP == null)
                return BadRequest("not found");

         
            dbP.phonenumber = person.phonenumber;
            dbP.FirstName = person.FirstName;
            dbP.LastName = person.LastName;
            dbP.Email = person.Email;
            dbP.Address = person.Address;
            
            

            await _Context.SaveChangesAsync();
            return Ok(await _Context.SigninModels.ToListAsync());
        }

        [HttpDelete("{ID}")]
        public async Task<ActionResult<List<SigninModel>>> DeletePerson(string ID) {
            var dbP = await _Context.SigninModels.FindAsync(ID);
            if (dbP == null)
                return BadRequest("not found");
            _Context.SigninModels.Remove(dbP);
            await _Context.SaveChangesAsync();
            return Ok(await _Context.SigninModels.ToListAsync());
        }
    }
}
