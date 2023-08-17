const express = require("express");
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get('/', function (req, res) {
    const message = "Hello World!";
    res.json({ message });
})

app.listen(process.env.port || 4000, function () {
    console.log('now listening for requests')
})