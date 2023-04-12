const http = require("http")

http
    .createServer((request, response) => {})
    .listen(4001, () => console.log('servidor rodando na porta 4001'))