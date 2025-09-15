// config/db-connection.js

// Importando o mongoose
import mongoose from "mongoose";

// Função para conectar no Atlas
const connect = () => {
    mongoose.connect(
        `mongodb+srv://yagokurashiki:lSpfggzTM5AcKE5x@cluster0.m8zoc67.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=Cluster0`
    );

    const connection = mongoose.connection;

    connection.on("error", (error) => {
        console.log("❌ Erro na conexão:", error);
    });

    connection.on("open", () => {
        console.log("✅ Conectado ao MongoDB Atlas!");
    });
};

connect();

export default mongoose;
