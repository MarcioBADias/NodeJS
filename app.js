const express = require('express')

const app = express()

app.get('/', (request, response)=>{
    return response.json({
        message: 'acesso à primeira rota'
    })
})

app.listen(4002, ()=> console.log('server 4002 on!'))