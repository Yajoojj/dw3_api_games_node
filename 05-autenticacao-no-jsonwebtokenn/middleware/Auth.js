import jwt from "jsonwebtoken";
import userController from "../controllers/userController.js"

// A função de autenticação para verificar se o usuario esta enviando e se ele é válido
const Authorization = (req, res, next) => {
    const authToken = req.headers['authorization'];
    if (authToken != undefined) {
        // Dividindo a string do token (para eliminar a palavra Berear
        const bearer = authToken.split(" ")
        const token = bearer[1]
        //Validando o token
        jwt.verify(token, userController.JWTSecret, (err, data) =>{
            if (err) {
                res.status(401).json({ error: "Token Inválido"})
                //TOKEN VÁLIDO
            } else{
              req.token = token;
              req.loggedUser = {
                  id: data.id,
                  email: data.email,
              };
                next()
            }
        });
    } else {
        res.status(401).json({error: "Acesso não autorizado, Token Invalido"})
    }
};

export default { Authorization };