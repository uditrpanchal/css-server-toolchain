var express = require('express');
var fs = require('fs');
var app = express();
var cfenv = require('cfenv');


app.get('/maincss', function(req, res){
    fs.readFile(__dirname + '/css/index.css', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });
  });

app.get('/mohlogo', function (req, res){
  fs.readFile(__dirname + '/images/Moh-logo.png', function (err, data) {
    if (err) console.log(err);
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.write(data);
    res.end();
  })
});
// app.listen(3000);

var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, appEnv.bind, function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
  console.log(appEnv.port);
});