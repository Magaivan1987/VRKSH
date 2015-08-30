/**
 * Created by Ivan on 29.08.2015.
 */
var express = require('express');

var app = express();

var port = 3030;


require('./routes')(app);


app.listen(port, function(){
    console.log('Server start success = ' + port);
});