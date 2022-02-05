const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

//Required for SSR
const React = require('react');
global.React = React;
const fs = require('fs');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
const HCardComponent = require('../frontend/main').default;

//Render Server Side 
app.get('/', (req, res) => {
    const indexFile = path.resolve('../frontend/index.html');

    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading File:', err);
        return res.status(500).send('Error on server. Try again later');
      }

      return res.send(
        data.replace(
            `<div class="HcardApp" />`,
            `<div class="HcardApp" ><div>${ReactDOMServer.renderToString(<HCardComponent />)}</div></div>`
          )
      );
    });
    
});

app.use(express.static("../frontend"));

// Parse x-www-form-urlencoded
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Resolve CORS issue on frontend
app.use(cors());
app.options('*', cors());

//Express server with routing
app.use(express.json());
app.use(require('./routes/routes'));
app.listen(port);

console.log('Server started on http://localhost:' + port);