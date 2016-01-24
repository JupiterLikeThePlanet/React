var express = require('express'),
  exphbs = require('express-handlebars'),
  http  = require('http'),
  mongoose = require('mongoose'),
  twitter = require('ntwitter'),
  routes = require('./routes'),
  config = require('./config'),
  streamHandler = require('./utils/streamHandler'),
  app   = require('./app');


var app = express();
var port = process.env.PORT || 3000;


app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.disable('etag');

mongoose.connect('mongodb://localhost/react-tweets');


var twit = new twitter(config.twitter);

// Index Route
app.get('/', routes.index);

// Page Route
app.get('/page/:page/:skip', routes.page);

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));


var server = http.createServer(app).listen(port, function() {
  console.log('Open the gateway at ' + port);
});

// http.createServer(app).listen(app.get('port'), function(){
//   console.log('Open the gateway at ' + app.get('port'));
// });


var io = require('socket.io').listen(server);

// Set a stream listener for tweets matching tracking keywords
twit.stream('statuses/filter',{ track: 'CampaignUSA2016, #election2016'}, function(stream){
  streamHandler(stream,io);
});