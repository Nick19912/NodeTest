# NodeTest

## Requirements
Node Version `14.18.2`.<br />
Extract the `Redis.zip` folder in the root folder.<br />

## Start application 
1) Start Redis by executing `Redis/redis-server.exe`.<br />
2) Run `npm install` to install node modules.<br />
3) Run `npm run start` to start server in SSR OR run `npm run dev` to start in development mode.<br />
4) Navigate to `http://localhost:3000/`.<br />
 
## Run unit tests
Run `npm run test` to start unit tests.

## Challanges
Below is a list of challenges faced:
* CORs issue on Update request.
* Get user details was tricky and ended up making slight adjustment to the index.html for a new endpoint.
* Had to downgrade to React v15 due to hyrdate not being available / no access to frontend code + prop-type issues on import of js file.
* Had to down babel v7 due to error `regeneratorRuntime is not defined`. 
* Images not sending to server.

Total time spend: 10hr (3hr SSR, 2hr Redis, 2hr Setup, 1hr Unit Testing, 2hr troubleshooting)
