// const types = {
//     html: "text/html",
//     css: "text/css",
//     js: "application/javascipt"
// };

const homeHandler = require("./handlers/home");

function router(request, response) => {
 
    const url = request.url;
    if (url === '/home.html'){
        homeHandler(request,response);
    }

}

module.exports = router;