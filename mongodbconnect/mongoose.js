const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb+srv://test:test@nodetester.u8p4w.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(DATABASE_URL, (err) => {
 if (err) console.log(err);
 else console.log('Connected to DB.');
});