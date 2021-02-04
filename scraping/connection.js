var mysql      = require('mysql');
exports.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'test',
    password : 'test',
    database : 'test'
  });