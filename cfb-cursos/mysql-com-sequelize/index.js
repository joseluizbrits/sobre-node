const Sequelize = require('sequelize')
const sequelize = new Sequelize('blog', 'Amarildo', 'feijaocomarroz', {
    host: 'localhost',
    dialect: 'mysql'
})

// Tabela postagens
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING  // VARCHAR
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Tabela usuarios
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER // INT
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: 'Nelson',
    sobrenome: 'Jazida',
    idade: '32',
    email: 'capixabadurao@email.com'
})

Usuario.sync({ force: true })
// Sincroniza o Usuario com o banco
// { force: true } para ter certeza que a tabela vai ser criada