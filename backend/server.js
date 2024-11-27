//Importações
const jwt = require("jsonwebtoken")
const cors = require("cors")
const express = require('express');
const mysql = require('mysql2');

//script do vídeo do marcio
const app = express();

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, SECRET_KEY } = process.env

app.use(cors())
app.use(express.json())

app.post("/register", (request, response) => {
    const user = request.body.user
    console.log(user)

    const searchCommand = `
        SELECT * FROM Users
        WHERE email = ?
    `

    db.query(searchCommand, [user.email], (error, data) => {
        if(error) {
            console.log(error)
            return
        }

        if(data.length !== 0) {
            response.json({ message: "Email já cadastrado", userExists: true})
            return
        }

        const insertCommand = `
            INSERT INTO Users(email, usuario, senha)
            VALUES (?, ?, ?)
        `

        db.query(insertCommand, [user.email, user.usuario, user.senha], (error) => {
            if(error) {
                console.log(error)
                return
            }

            response.json ({ message: "Usuário cadastrado com sucesso"})
        })
        
    })
    
})

app.post("/login", (request, response) => {
    const user = request.body.user

    const searchCommand = `
        SELECT * FROM Users
        WHERE email = ?
    `

    db.query(searchCommand, [user.email], (error, data) => {
        if(error) {
            console.log(error)
            return
        }

        if(data.length === 0) {
            response.json({message: "E-mail não cadastrado"})
            return
        }

        if(user.senha === data[0].senha) {
            const email = user.email
            const token = jwt.sign({ email }, SECRET_KEY, {expiresIn: "1h"})
            response.json({token, ok: true})
            return
        }

        response.json({message: "Credenciais inválidas, tente novaente"})
    })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

const db = mysql.createPool({
    connectionLimit: 10,
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD
})