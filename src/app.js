import express from "express";
const app = express();

const livros = [
    {
        id: 1,
        titulo: "It: A coisa"
    },
    {
        id: 2,
        titulo: "A hora da estrela"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js: criando uma API Rest com Express e MongoDB");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

export default app; 