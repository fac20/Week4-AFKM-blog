const fs = require('fs');
const path = require('path');
const posts = require('../model');

function messageHandler (request,handler){
  const filePath = path.join(__dirname, 'public', 'home.html');
  console.log(filePath);
  fs.readFile(filePath, 'utf-8', (error,file))=>{
    if(error){
      console.error(error);
    }else {
      const Newposts = posts.map((e) =>{
        return `  <article id='article'>
        <h1 id='name'>To:${e.name}</h1>
        <p id='loveNote'>${e.message}</p>
        <button id='deleteBtn'>BURN NOTE!!!</button>
       </article>`
      })
      const replace = file.replace(`
      <p>Hello Lover x</p>`,post.join('\n'))
      response.writeHead(200, { "content-type": "text/html" });
      response.end(replace);
    }
  }

}
// const template = document.getElementById("template");
// console.log(template);
// const article = document.getElementById("container");
// console.log(article);

// fetch("/getposts")
//   .then((res) => {
//     if (!res.ok) throw new Error("Bad response from Server");
//     return res;
//   })
//   .then((res) => res.json)
//   .then((data) => {
//     Object.keys(data).forEach((e) => {
//       let post = data[e];
//       let newNote = template.content.cloneNode(true);
//       let recipient = document.querySelector("#name");
//       let message = document.querySelector("#loveNote");
//       recipient.textContent = post.recipient;
//       message.textContent = post.message;

//       article.appendChild(newNote);
//     })
// .catch(error => console.error(error));

//   });
