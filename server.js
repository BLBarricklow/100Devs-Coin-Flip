const http = require('http');
const fs = require('fs');
const url = require('url');
//const querystring = require('querystring')
const figlet = require('figlet');
const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  //const params = querystring.parse(url.parse(req.url).query);
  if (page == '/') {
   fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
   });
  }
  else if (page == 'assets/quarterHeads.jpg') {
    serveStaticFile(res, 'assets/quarterHeads.jpg', 'image/jpeg')
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
      let coinFlip = Math.floor((Math.random() * 10) % 2);
      if (coinFlip === 0) {
      const objToJson = {
        result : 'Heads Wins!',
        image : 'assets/quarterHeads.jpg'
      }
      res.end(JSON.stringify(objToJson));
    } else if (coinFlip != 0){
      const objToJson = {
        result : 'Tails Wins!',
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
