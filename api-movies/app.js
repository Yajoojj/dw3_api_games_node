import express from "express";
import mongoose from "mongoose";
import filmesRoutes from "./routes/movieRoutes.js";
import Filme from "./models/movies.js";

const servidor = express();

servidor.use(express.json());
servidor.use(express.urlencoded({ extended: true }));
servidor.use("/", filmesRoutes);

mongoose.connect("mongodb://localhost:27017/apimovies");

const PORTA = 4000;
servidor.listen(PORTA, (err) => {
    if (err) {
        console.error("Erro ao iniciar o servidor:", err);
    } else {
        console.log(`Servidor online em: http://localhost:${PORTA}`);
    }
});

servidor.get("/", (req, res) => {
    const listaFilmes = [
        {
            titulo: "Django Livre",
            ano: 2012,
            genero: "Drama, Faroeste, Ação",
            duracao: "2h45min",
            estreia: "18/01/2013",
        },
        {
            titulo: "Ilha dos Cachorros",
            ano: 2018,
            genero: "Animação, Aventura, Comédia",
            duracao: "1h42min",
            estreia: "14/06/2018",
        },
    ];
    return res.status(200).json(listaFilmes);
});
