using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using PublicApi.Hub;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PublicApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class ProductOfferController : Controller
    {
        private IHubContext<MessageHub, IMessageHubClient> messageHub;
        public ProductOfferController(IHubContext<MessageHub, IMessageHubClient> _messageHub)
        {
            messageHub = _messageHub;
        }

        [HttpPost]
        [Route("productoffers")]
        public string Get()
        {
            List<string> offers = new List<string>();
            offers.Add("20% Off on IPhone 12");
            offers.Add("15% Off on HP Pavillion");
            offers.Add("25% Off on Samsung Smart TV");
            messageHub.Clients.All.SendOffersToUser(offers);
            messageHub.Clients.All.SendCustomMessage("this is a moja custom message");
            messageHub.Clients.User("Admin").BroadcastToUser("message to 1212");
            try
            {
                messageHub.Clients.User("Admin").SendIndividual("to admin user");
                messageHub.Clients.User("User1").SendIndividual("to User1 user");

            }
            catch (Exception exe)
            {
                var a = 3;
            }
            return "Offers sent successfully to all users!";
        }
    }
}

