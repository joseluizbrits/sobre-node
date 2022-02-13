const http = require('http')

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'Text/Plain'
    })
    response.write('Hello, world!')
    response.end()
}).listen(1337)
