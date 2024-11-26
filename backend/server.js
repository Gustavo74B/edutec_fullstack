//Importação do cors e jsonwebtoken
const jwt = require("jsonwebtoken")
const cors = require("cors")

// Importação e uso do MySQL12 
const mysql = require('mysql2');

    // Configuração da Conexão com mysql
    const db = mysql.createConnection({
        host: 'localhost',       // Ou o endereço do seu servidor MySQL
        user: 'usuario',      // Usuário do MySQL
        password: 'senha',    // Senha do MySQL
        database: 'db_edutec',     // Nome do banco de dados
        port: 3307
    });
    
    // Conecta ao banco de dados (se der erro, ele avisa)
    db.connect((err) => {
        if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
        }
        console.log('Conectado ao banco de dados MySQL');
    });


// Importação e uso do Express
    const express = require('express');
    const app = express();

    // Define uma porta para o servidor
    const PORT = process.env.PORT || 3000;

    // Inicia o servidor
    app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    });


//script do vídeo do marcio
app.use(cors())

app.post("/register", (request,response) => {
        const user = request.body.user
    
        console.log(user)
    })
app.use(express.json())