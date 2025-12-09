import http from "http";

const PORT = 3000;

const rotas = {
    "/": "Curso de Node.js: criando uma API Rest",
    "/livros": "Testando uma rota para livros",
    "/autores": "Testando uma rota para autores"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain"});
    res.end(rotas[req.url]);
});

server.listen(3000, () => {
    console.log("servidor escutando!");
});
