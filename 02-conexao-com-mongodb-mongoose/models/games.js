import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    tittle: String,
    year: Number,
    genre: String,
    plataform: String,
    price: Number,
})

const Game = mongoose.model('Game', gameSchema);

export default Game;
