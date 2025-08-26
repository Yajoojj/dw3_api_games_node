import Game from "../models/Games.js";

//O service será responsável por conter os métodos de manipulação do banco

class GameService {
    // Buscando os registros do banco
    async getAll() {
        try {
            const games = await Game.find();
            return games;
        } catch (error) {
            console.log(error);
        }
    }
    async Create(tittle, year, genre, platform, price){
   try {

   }catch(error){
       console.log(error);
   }

    }
}


export default new GameService();