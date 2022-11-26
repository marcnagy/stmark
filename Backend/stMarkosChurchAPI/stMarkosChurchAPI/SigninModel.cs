using Microsoft.EntityFrameworkCore.Scaffolding.Metadata;

namespace stMarkosChurchAPI
{
    public class SigninModel
    {
        public string ID { get; set; }=string.Empty;
        public string phonenumber { get; set; }=string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
    }
}
