let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
const port = 3000;

var React = require('react');
var ReactDomServer = require('react-dom/server');

ReactDomServer.renderToStaticMarkup(React.createElement("h2", null,"HHHHEEEEEEEEEEEEEEEE"));

// Parse x-www-form-urlencoded
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Resolve CORS issue on frontend
app.use(cors())
app.options('*', cors());

//Express server with routing
app.use(express.json());
app.use(require('./backend/routes/routes'));
app.listen(port);

console.log('Server started on localhost:' + port);