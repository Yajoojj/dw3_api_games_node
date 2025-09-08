import mongoose from "mongoose";

// Definição do schema de Filme
const filmeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    ano: { type: Number, required: true },
    genero: { type: String },
    duracao: { type: String },
    estreia: { type: Date }
});

// Model baseado no schema
const Filme = mongoose.model("Filme", filmeSchema);

export default Filme;
