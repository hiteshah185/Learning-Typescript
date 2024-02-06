const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const components = require('./mock-server/routes/components')

const app = express();

app.use(
    favicon(path.join(__dirname,'favicon.png'))
);
app.use(
    bodyParser.json()
);
app.use(
    bodyParser.urlencoded({extended:false})
);
app.use(
    "/api/components",components
);
app.set(
    'port',process.env.PORT || 3000
);
app.listen(app.get('port'));
console.log('Listening on port:'+app.get('port'));
module.exports = app;