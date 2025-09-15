import express from "express";
import "./config/db-connection.js"; // 🔹 importa a conexão já configurada

const app = express();

// Importando para ser criado no banco
import Game from "./models/Games.js";
import User from "./models/Users.js";

// Importando as rotas
import gameRoutes from "./routes/gameRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", gameRoutes);
app.use("/", userRoutes);

// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`🚀 API rodando em http://localhost:${port}`);
});
