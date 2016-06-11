import express from 'express';

var playlists = require('./routes/playlists');

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/youtubedb');

const app = express();

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.use('/', express.static('public'));
app.use('/playlists', playlists);

app.listen(process.env.PORT = 3000, () => {
  console.log('Express is listening on port: 3000');
});
