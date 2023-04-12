const http = require("http")

http
    .createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify({
            message:'Conhecendo o NodeJS'
        }))
    })
    .listen(4001, () => console.log('servidor rodando na porta 4001'))