import jwt from "jsonwebtoken"
import { users } from "../database.js"

export const loginUserCtrl = (req, res) => {
    try {
        const { username, password } = req.body

        //Se busca el usuario enviado en la base de datos
        const user = users.find(user => user.username === username && user.password === password)

        //Si no se encuentra al usuario, la autenticacion falla
        if (!user) {
            res.status(404).json({ message: "El usuario no existe" })
            return
        }

        //Contenido del JWT:

        const payloadToken = { //Información del usuario
            user_id: user.id,
            username: user.username
        }
        const secretKeyToken = "mi-secreto" //Clave Secreta

        const optionsToken = { //Configuración del Token
            expiresIn: "1h"
        }

        const token = jwt.sign(payloadToken, secretKeyToken, optionsToken) //Firma del token

        res.status(200).json({message: "Inicio de Sesión exitoso", "token":token})

    } catch (error) {
        res.status(500).json({message:"Error Inesperado", error})
    }
}