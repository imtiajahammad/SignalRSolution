using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace PublicApi.Hub
{
    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    public class MessageHub : Hub<IMessageHubClient>
    {
        public async Task SendOffersToUser(List<string> message)
        {
            var name = Context.User.Identity.Name;
            await Clients.All.SendOffersToUser(message);
        }
        public async Task SendCustomMessage(string msg)
        {
            await Clients.All.SendCustomMessage("moja");
        }
        public async Task BroadcastToUser(string data)
        {
            await Clients.User("1212").BroadcastToUser("moja");
        }
        public async Task SendIndividualPara(string userId, string message)
        {
            var name = Context.User.Identity.Name;
            await Clients.User(userId).SendIndividual(message);
        }
        public void Send(string userId, string message)
        {
            Clients.User(userId).SendIndividual(message);
        }
    }
}

