const fs = require("fs")
const path = require("path")

function submitHandler(request, response) {
    let formBody = ""; 
    // callback runs every time the stream has the next bit of data
    request.on("data", formDataChunk => { // data is an event. request.on is like an event listener 
        formBody += formDataChunk; 
    });
// callback runs when request finishes and we have all the data
    request.on("end", () => {
        console.log(formBody); 
        const data = new URLSearchParams(formBody);
        const name = data.get("name")
        const note = data.get("loveNote")
        console.log(data)
        console.log(note)
        console.log(name)
        response.writeHead(200, {"content-type": "text/html"})
        response.end(`thanks for submitting your note to ${name}`)
    }
    )

    //Co-authored-by: name <name@example.com>
//Co-authored-by: another-name <another-name@example.com>"

//save the info in variables, 
//send it on a route and get that route from the client side 
}

module.exports = submitHandler;