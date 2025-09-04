// Importando o Service
import userService from '../services/userService.js';

// Função para cadastrar um usuario
const createUser = async (req, res) => {
    try{
        // Coletando os dados do corpo da requisição
        const {name, email, password} = req.body;
        await userService.Create({name, email, password});
        res.sendStatus(201).json({message: 'Usuário cadastrado com sucesso!'}); // Cod. 201: Created
} catch (error){
        console.error(error);
        res.sendStatus(500); // erro interno do servidor
    }
}
export default { createUser };