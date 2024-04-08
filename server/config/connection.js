const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');
// mongoose.connect( "mongodb+srv://travisnielson01:8JVckEyv12BLOcI5@cluster0.24ilvcw.mongodb.net/googlebooks?retryWrites=true&w=majority&appName=Cluster0")
module.exports = mongoose.connection;
