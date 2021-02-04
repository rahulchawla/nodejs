var mysql=require('mysql');
var con=mysql.createConnection({
    user:'test',
    password:'test',
    host:'localhost',
    database:'nodetest'
})
con.connect(function(err){
if(err) throw err
console.log('connected');
var query="INSERT into abc(name) VALUES('rahul')";
con.query(query,function(err,result){
if(err) throw err
console.log(result.affectedRows);
})
})
