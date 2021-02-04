var http=require('http');

//custom module
var datedata=require('./datemodule');

//fileread
var fs = require('fs');


//http server
http.createServer(function(req,res){
    fs.readFile('template.html',function(err,data){
        if(err) throw err;
        fs.writeFile('newfile.html', 'data', function (err) {
            if (err) throw err;
            console.log('Replaced!');
          });

        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data+datedata.dtm());
        return res.end();
    });

}).listen(8080);