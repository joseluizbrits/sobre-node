const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server = http.createServer((req, res) => {
    fs.appendFile('arquivo.txt', 'Aqui está o texto do arquivo', (err) => {
        if (err) throw err
        console.log('Arquivo criado')
    })
})

server.listen(porta || 3000, () => {console.log('Servidor rodando')})