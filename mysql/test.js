var mysql=require('mysql');
var con=mysql.createConnection({
  host:'localhost',
  user:'test',
  password:'test',
  database:'nodetest'
})
con.connect(function(err){
if(err) throw err;
console.log('connected');
con.query("INSERT into abc(name) VALUES('jheg')",function(err,result){
if(err) throw err;
console.log('inserted '+ result.affectedRows);
})
})