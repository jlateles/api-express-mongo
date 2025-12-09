import express from "express";
const app = express();
app.use(express.json());

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

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Cadastro de livro foi criado com sucesso!")
})

export default app; 