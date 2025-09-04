// Importando o model
import User from "../models/Users.js";

class userService{
    // Método para CADASTRAR Usuário
    async Create(name, email, password){
        try{
            const newUser = User({
                name,
                email,
                password,
            })
            await newUser.save();
        }catch (error){
            console.log(error)
        }
    }
}
export default new userService();