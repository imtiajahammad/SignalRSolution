using System;
namespace PublicApi.Hub
{
	public interface IMessageHubClient
	{
        Task SendOffersToUser(List<string> message);
        Task SendCustomMessage(string message);
        Task BroadcastToUser(string data);
        Task SendIndividual(string message);
    }
}

