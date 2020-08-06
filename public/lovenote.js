const template = document.getElementById("template");
console.log(template);
const article = document.getElementById("container");
console.log(article);

fetch("/getposts")
  .then((res) => {
    if (!res.ok) throw new Error("Bad response from Server");
    return res;
  })
  .then((res) => res.json)
  .then((data) => {
    Object.keys(data).forEach((e) => {
      let post = data[e];
      let newNote = template.contentEditable.cloneNode(true);
      let recipient = document.querySelector("#name");
      let message = document.querySelector("#loveNote");
      recipient.textContent = post.recipient;
      message.textContent = post.message;

      article.appendChild(newNote);
    })
.catch(error => console.error(error));

  });
