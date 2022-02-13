const express = require('express')
const app = express()
const porta = process.env.PORT

app.get('/', (req, res) => {
    res.send('Seja bem vindo!')
})

app.get('/esportes', (req, res) => {
    res.json({esporte: 'Basquete'})
})

app.listen(porta || 3000, () => {console.log('Servidor rodando')})