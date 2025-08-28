import gameService from "../services/gameService.js"


//Func Listar e cadastrar
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll()
        res.status(200).json({ games : games }) //Código 200 : Ok - Req feito com sucesso
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor" })
    }
};

//Func para CADASTRAR jogos
const createGame = async (req, res) => {
    try{
        const{tittle, year, genre, platform, price} = req.body;
        await gameService.Create(tittle, year, genre, platform, price);
        res.sendStatus(201) // Código 201 (CREATED) : Recurso criado
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor" })
    }


}




export default { getAllGames, createGame }