import express from 'express'
const gameRoutes = express.Router()
import gameController from '../controllers/gameController.js'

// a camada de routes será responsável por definir as rotas da aplicação
gameRoutes.get("/games", gameController.getAllGames)

// ENDPOINT para CADASTRAR
gameRoutes.post("/games", gameController.createGame)

export default gameRoutes;