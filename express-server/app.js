const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb+srv://test:test@nodetester.u8p4w.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(DATABASE_URL, (err) => {
 if (err) console.log(err);
 else console.log('Connected to DB.');
});


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://test:test@nodetester.u8p4w.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log("connected");
//   client.close();
// });
