# SignalRSolution



#PublicApi







# SignalRClient

Create Angular application:
ng new  SignalRClient

Install SignalR library for client application:
npm install @microsoft/signalr --save

Install bootstrap for a better user experience:
ng add @ng-bootstrap/ng-bootstrap

Next, add the bootstrap script inside the angular.json file inside the scripts and styles section.
"styles": 
[
     "src/styles.css",
     "./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": 
[
     "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]