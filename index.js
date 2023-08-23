const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
require('./database/connect');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const route = require('./routes/apiUser');


const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api', routes);
app.use('/api', route);

app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
});

app.get('/', function (req, res) {
    const message = "Hello World!";
    res.json({ message });
});

app.listen(process.env.port || 4000, function () {
    console.log('now listening for requests')
});