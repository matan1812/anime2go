const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/lions', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb+srv://MatanAdmin:915236874@cluster0.nxvdb.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongo connected")
  // we're connected!
});

module.exports = db;