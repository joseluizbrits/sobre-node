const express = require('express')
const rotas = express.Router()

const cursoInfo = [
    {'curso':'node', 'info':'Curso de Node.js'},
    {'curso':'react', 'info':'Curso de ReactJS'},
    {'curso':'mysql', 'info':'Curso de MySQL'},
    {'curso':'python', 'info':'Curso de Python'},
    {'curso':'c++', 'info':'Curso de C++'},
]

rotas.get('/', (req, res) => {
    res.json({ola:'Seja bem vindo!'})
})

rotas.get('/:cursoid', (req, res) =>{
    const curso = req.params.cursoid
    const cursoI = cursoInfo.find(i => i.curso === curso)
    if (!cursoI) {
        res.status(404).json(
            {erro:'Curso não encontrado', cursoPesquisado:curso}
        )
    } else {
        res.status(200).json(cursoI)
    }
})

module.exports = rotas