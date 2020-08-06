const fs = require("fs")
const path = require("path")
let getCount = require("../model");
let increment = require("../model");
let posts = require("../model");

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
        increment(); 
        const id = getCount(); 
        const newNote = {
            recipient: name,
            message: note 
        };
        posts[id]=newNote
        console.log(posts)
        response.writeHead(302, {location : "/"})
        response.end();
    })
}


//save the info in variables, 
//send it on a route and get that route from the client side 


module.exports = submitHandler;