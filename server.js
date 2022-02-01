let express = require('express');
let app = express();

//parse x-www-form-urlencoded
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
  
app.use(express.json());
app.use(require('./backend/routes/routes'));
const port = 3000;
app.listen(port);

console.log('Server started on localhost:' + port);