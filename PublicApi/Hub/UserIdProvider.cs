using System;
using Microsoft.AspNetCore.SignalR;

namespace PublicApi.Hub
{
	public class UserIdProvider : IUserIdProvider
	{
        public string GetUserId(HubConnectionContext connection)
        {
            return connection.User.Identity.Name;
        }
    }
}

