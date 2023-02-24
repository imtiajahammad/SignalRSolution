import { Component } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SignalRClient';
    private hubConnectionBuilder!: HubConnection;
    offers: any[] = [];
    customMsg: any ;
    singleUserMsg : any;
    constructor() {}
    ngOnInit(): void {
        this.hubConnectionBuilder = new HubConnectionBuilder()
        .withUrl('https://localhost:7175/offers',
        { accessTokenFactory: () =>
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEwYzJkNzliLWNiZTgtNDFlZi1hMTU5LTk5YmFiMjkxMjBkMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJVc2VyMSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluYWtwQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiODcwNzE1YzktZGVmYS00NmJiLWIwMDMtMGZiOGI4Njk2NzczIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiRmViIFNhdCAyNSAyMDIzIDA0OjU2OjE5IEFNIiwibmJmIjoxNjc3MjE0NTc5LCJleHAiOjE2NzcyNzkzNzksImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxNjgiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MTY4In0.f874Qp-rsjEn_nqWPhi6SwbhDk0QmnCfJJoOMqcqHaY" })
        .configureLogging(LogLevel.Information)
        .build();
        /*const connection = new signalR.HubConnectionBuilder()
        .withUrl("http://localhost:5000/notifications", { accessTokenFactory: () => localStorage.token })
        .build()*/

        this.hubConnectionBuilder.start().then(() => console.log('Connection started.......!')).catch(err => console.log('Error while connect with server'));

        this.hubConnectionBuilder.on('SendOffersToUser', (result: any) => {
          console.log(result);
            this.offers.push(result);
        });

        this.hubConnectionBuilder.on('SendCustomMessage', (res: any)=>
        {
          this.customMsg=res;
        });
        this.hubConnectionBuilder.on('SendIndividual',(resS: any)=>
        {
          this.singleUserMsg=resS;
        });
    }
}
