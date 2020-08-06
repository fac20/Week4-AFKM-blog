const fs = require("fs");
/* fs is a node module that allows you to 
work with your computers file system */
const path = require("path");

function homeHandler(request, response) {
  fs.readFile(path.join(__dirname,'..', "public", "home.html"), (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1> Not Found</h1>");
    } else {
      response.writeHead(200, { "content-type": "text/html" });
    //   console.log(file.toString());
      response.end(file);
    }
  });
}
module.exports = homeHandler;
