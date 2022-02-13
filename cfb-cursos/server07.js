const http = require('http')
const eventos = require('events')
const EventoEmissor = new eventos.EventEmitter()

EventoEmissor.on('msg', () => {conselo.log('Evento disparado')})

const porta = process.env.PORT || 3000
const retorno = () => {console.log('Rodando')}
const servirdor = http.createServer((req, res) => {
    EventoEmissor.emit('msg')
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write('BRITS')
    res.end()
})

servirdor.listen(porta, retorno)