const http = require('http');
const fs = require('fs');
const url = require('url');
const figlet = require('figlet');
const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  if (page == '/') {
   fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
   });
  }
  else if (page == '/assets/quarterHeads.jpg') {
    fs.readFile('assets/quarterHeads.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
   });
  }
  else if (page == '/assets/quarterTails.jpg') {
    fs.readFile('assets/quarterTails.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
   });
  }
  else if (page == '/assets/coinflip.gif') {
    fs.readFile('assets/coinflip.gif', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/gif'});
      res.write(data);
      res.end();
   });
  }
  else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      let coinFlip = Math.random();
      if (coinFlip > 0.4) {
      const objToJson = {
        result : "It's Heads!",
        image : 'assets/quarterHeads.jpg'
      }
      res.end(JSON.stringify(objToJson));
    } else if (coinFlip != 0){
      const objToJson = {
        result : "It's Tails!",
        image : 'assets/quarterTails.jpg'
      }
      res.end(JSON.stringify(objToJson));
    } 
  } else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});
server.listen(8000)
