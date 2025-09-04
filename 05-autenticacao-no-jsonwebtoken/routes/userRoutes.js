import express from "express"
const userRoutes = express.Router();
import userController from "../controllers/userController.js"

// Rota para CADASTRAR um usuario
userRoutes.post("/user", userController.createUser);

export default userRoutes;
