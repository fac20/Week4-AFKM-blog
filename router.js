
const formHandler = require("./handlers/form")
const homeHandler = require("./handlers/home");
const publicHandler = require('./handlers/public');

function router(request, response) {
 
    const url = request.url;
    if (url === '/'){
        homeHandler(request,response);
    } else if (url.includes('public')) {
        publicHandler(request, response)
    } else if (url.includes('form')) {
        formHandler(request, response)
    }
    
}

module.exports = router;

