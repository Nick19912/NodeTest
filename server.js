let express = require('express');
let app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const port = 3000;


// Parse x-www-form-urlencoded
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Resolve CORS issue on frontend
app.use(cors())
app.options('*', cors());

app.use(express.json());
app.use(require('./backend/routes/routes'));
app.listen(port);
console.log('Server started on localhost:' + port);