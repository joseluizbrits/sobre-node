const http = require('http')
const porta = 3000
const host = '127.0.0.1' // é o localhost

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'})
    if (req.url == '/') {
        res.write('<h1>Seja bem vindo!</h1>')
    } else if (req.url == '/pagina2') {
        res.write('<h1>Você está na Página 2</h1>')
    } else if (req.url == '/pagina3') {
        res.write('<h1>Essa é a Página 3</h1>')
    }
    res.end()
})

servidor.listen(porta, host, () => {console.log('Servidor rodando')})