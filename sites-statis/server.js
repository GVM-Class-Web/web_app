// create for server static sites

// initiate variable 
var http = require("http"), // http 
    url = require("url"), // variabel url for request when we run
    path = require("path"), // path
    fs = require("fs"), // fs is (file system)
    port = process.argv[2] || 8888; // port for running node server static

// function to create server
http.createServer(function(request, response) {

    var uri = url.parse(request.url).pathname, 
        filename = path.join(process.cwd(), uri);

    // function check the condition exist or not
    fs.exists(filename, function(exists) {
      console.log('request', request);
      if(exists) {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("Pages : 404 Not Found\n");
        response.end();
        return;
      }

      // condition where file system syncronize to directory
      if (fs.statSync(filename).isDirectory()) filename += '/index.html';

      // file system readFile
      fs.readFile(filename, "binary", function(err, file) {
        if(err) {        
          response.writeHead(500, {"Content-Type": "text/plain"});
          response.write(err + "\n");
          response.end();
          return;
        }

        response.writeHead(200);
        response.write(file, "binary");
        response.end();
      });
    });

}).listen(parseInt(port, 10)); // listening port 

console.log('====================================================');
// log where sites run appear in CMD
console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
console.log('====================================================');