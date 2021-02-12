var express = require('Express');
var app = express();

var things = require('./routes.js');

//both index.js and things.js should be in same directory
app.use('/things abc',function(req, res, next){
    console.log("A new request received at " + Date.now());
    
    //This function call is very important. It tells that more processing is
    //required for the current request and is in the next middleware
    //function/route handler.
    next();
 });

app.use('/things abc', things);
app.get('/:name/:id([0-9]{3})', function(req, res){
    res.send('The id you specified is ' + req.params.name+"::"+req.params.id);
 });
app.listen(3000);