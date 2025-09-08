import filmeService from "../services/movieService.js";
import { ObjectId } from "mongodb";

// Controlador para FILMES

// Listar todos
const listarTodos = async (req, res) => {
    try {
        const filmes = await filmeService.listarTodos();
        return res.status(200).json({ filmes });
    } catch (err) {
        console.error("Erro ao listar filmes:", err);
        res.status(500).json({ erro: "Falha interna no servidor." });
    }
};

// Cadastrar novo
const cadastrar = async (req, res) => {
    try {
        const { titulo, ano, genero, duracao, estreia } = req.body;
        const filmeNovo = await filmeService.cadastrar(
            titulo,
            ano,
            genero,
            duracao,
            estreia
        );
        return res.status(201).json(filmeNovo);
    } catch (err) {
        console.error("Erro ao cadastrar filme:", err);
        res.status(500).json({ erro: "Não foi possível registrar o filme." });
    }
};

// Remover por ID
const remover = async (req, res) => {
    try {
        const { id } = req.params;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ erro: "ID inválido fornecido." });
        }
        await filmeService.remover(id);
        res.sendStatus(204);
    } catch (err) {
        console.error("Erro ao remover filme:", err);
        res.status(500).json({ erro: "Problema ao excluir filme." });
    }
};

// Atualizar por ID
const atualizar = async (req, res) => {
    try {
        const { id } = req.params;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ erro: "ID inválido fornecido." });
        }
        const { titulo, ano, genero, duracao, estreia } = req.body;
        const atualizado = await filmeService.atualizar(
            id,
            titulo,
            ano,
            genero,
            duracao,
            estreia
        );
        return res.status(200).json({ atualizado });
    } catch (err) {
        console.error("Erro ao atualizar filme:", err);
        res.status(500).json({ erro: "Falha ao atualizar registro." });
    }
};

// Buscar apenas um por ID
const buscarPorId = async (req, res) => {
    try {
        const { id } = req.params;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ erro: "ID inválido fornecido." });
        }

        const filme = await filmeService.buscarPorId(id);
        if (!filme) {
            return res.status(404).json({ erro: "Filme não encontrado." });
        }

        res.status(200).json({ filme });
    } catch (err) {
        console.error("Erro ao buscar filme:", err);
        res.sendStatus(500);
    }
};

export default {
    listarTodos,
    cadastrar,
    remover,
    atualizar,
    buscarPorId,
};
