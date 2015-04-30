var express = require('express');
var serveStatic = require('serve-static');

var webshot = require('webshot');
var fs      = require('fs');



var app = express();
var publicDir = __dirname + '/../public/';
console.log("publicDir:", publicDir)

app.use(serveStatic(publicDir, {'index': ['index.html']}));

// return a webshot (png)
app.post("/api/webshot", function(req, res) {
  webshot('www.scala-lang.org', function(err, renderStream) {
    res.set('Content-Type', 'image/png');

    renderStream.on('data', function(data) {
      res.write(data.toString('binary'), 'binary');
    });
    renderStream.on('end', function() {
      res.status(200).end();
    });
  });
});

// return a list of bookmarks(no details)
app.get("/api/bookmarks", function(req, res) {

});

// return a bookmark with details
app.get("/api/bookmarks/:id", function(req, res) {

});

app.listen(3000);