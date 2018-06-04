var express = require('express');
var bodyParser = require('body-parser');
var htmlRoutes = require('./app/routing/htmlRoutes');

var app = express()
var PORT = process.env.PORT || 3000;
htmlRoutes(app)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

