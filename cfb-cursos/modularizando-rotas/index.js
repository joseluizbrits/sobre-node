const express = require('express')
const rotas = require('./Rotas/rotas')
const porta = process.env.PORT || 3000

const app = express()

app.use('/', rotas)

app.get('*', (req, res) => {
    res.send('BRITS')
})

app.listen(porta, () => {console.log('Rodando')})