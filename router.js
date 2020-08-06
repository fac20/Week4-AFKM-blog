
const formHandler = require("./handlers/form");
const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const submitHandler = require("./handlers/submit");
const getPostsHandlers = require("./handers/getposts.js")
const addPostHandler = require("./handlers/getposts")

function router(request, response) {
 
    const url = request.url;
    const method = request.method;
    if (url === '/'){
        homeHandler(request,response);
    } else if (url.includes('public')) {
        publicHandler(request, response)
    } else if (url === '/form') {
        formHandler(request, response)
    } else if (method === "POST" && url === "/submit") {
        submitHandler(request, response);
    } else if (method === "GET" && url === "/submit") { 
    addPostHandler(request, response);  
  } 
}
module.exports = router;
