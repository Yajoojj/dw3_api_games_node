import express from "express";
import filmeController from "../controllers/movieController.js";

const routerFilmes = express.Router();

// Buscar todos
routerFilmes.get("/filmes", filmeController.listarTodos);

// Adicionar novo
routerFilmes.post("/filmes", filmeController.cadastrar);

// Remover por ID
routerFilmes.delete("/filmes/:id", filmeController.remover);

// Atualizar por ID
routerFilmes.put("/filmes/:id", filmeController.atualizar);

// Buscar apenas um
routerFilmes.get("/filmes/:id", filmeController.buscarPorId);

export default routerFilmes;
