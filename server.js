const dotenv = require('dotenv').config();
const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer((request, response) => {
    // console.log(request.url);
    response.end('lisa');
});

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));