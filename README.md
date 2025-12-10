# delay-webapp-ui-api
sample delay webapp ui and api using espresso and nginx

### How to run
npm init -y
npm install express

#### If using node or nodemon
node index.js or nodemon index.js

#### If using docker 
docker build -t delay-api .
docker run -p 3000:3000 delay-api


### Sample Usage

``` bash
curl -X POST http://localhost:3000/delay -H "Content-Type: application/json" -d '{"seconds": 3}'

```