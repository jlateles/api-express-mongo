import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain"});
    res.end("Curso de Node.js: criando uma API Rest");
});

server.listen(3000, () => {
    console.log("servidor escutando!");
});
