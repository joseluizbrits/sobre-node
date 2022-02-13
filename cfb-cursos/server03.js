const http = require('http')
const url = require('url')
const porta = 3000
const host = '127.0.0.1' // é o localhost

const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(req.url)
    const p = url.parse(req.url, true).query
    res.write('<br>/' + p.nome)
    res.write('<br>/' + p.empresa)
    res.end()
})

servidor.listen(porta, host, () => {console.log('Servidor rodando')})