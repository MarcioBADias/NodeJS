const express = require('express')

const app = express()

app.use(express.json())

const products = []

/*
*POST => Inserir um dado
*GET => Buscar um ou mais dado dados
*PUT => Alterar um dado
*DELETE => Remover um dado
*/

/*
*BODY => Sempre que eu quiser enviar dados para minha aplicação
*PARAMS => /product/251547511154 (ID) 
*QUERY => /product?id=26586268586562658&value=3525686846813
*/

app.post('/products', (request, response) => {

    const body = request.body
    console.log(body)
})

app.listen(4002, ()=> console.log('server 4002 on!'))