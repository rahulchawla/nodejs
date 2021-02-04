const axios = require('axios')
var https = require('https');
const cheerio = require('cheerio');
const agent = new https.Agent({  
    rejectUnauthorized: false
  });
  const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'test',
    password : 'test',
    database : 'test'
  });
const getBreeds = () => {
  try {
    return axios.get('https://example.com/', { httpsAgent: agent })
  } catch (error) {
    console.error(error)
  }
}

const countBreeds = async () => {
  const breeds = getBreeds()
    .then(response => {
      if (response.data) {
          
          var html=response.data;
        // console.log(response.data);
        const $ = cheerio.load(html);
        const name =$('h1', html).text();
        //console.log($('h1', html).text());
        connection.connect(function(err){
            if(err) throw err;
            console.log('connected');
            connection.query("INSERT into abc(name) VALUES('"+name+"')",function(err,result){
            if(err) throw err;
            console.log('inserted '+ result.affectedRows);
            })
            connection.end();
            })

      }
    })
    .catch(error => {
      console.log(error)
    })
}

countBreeds()