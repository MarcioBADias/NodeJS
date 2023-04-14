const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.json())

let products = []

productsFile()

app.post('/products', (request, response) => {

    const { name, price, quantidade, id } = request.body

    const product = {
        name,
        price,
        quantidade,
        id
    }

    products.push(product)

    fs.writeFile('products.json', JSON.stringify(products), (err) => {
        if(err){
            console.log(err)
        }else{
            console.log('Produto inserido')
        }
    })

    return response.json(product)
    console.log(name)
})

app.get('/products', (request, response)=>{
    return response.json(products)
})

app.get('/products/:id', (request, response)=>{
    const { id } = request.params
    const product = products.find(product => product.id === id)

    return response.json(product)
})

app.put('/products/:id', (request, response)=>{
    const { id } = request.params
    const { price, quantidade } = request.body
    const productIndex = products.findIndex(product => product.id === id)
    
    products[productIndex] = {
        ...products[productIndex],
        price,
        quantidade
    }
    productsFile()

    return response.json({ message:'Alterado com sucesso!' })
})

app.delete('/products/:id', (request, response)=>{
    const { id } = request.params
    const productIndex = products.findIndex(product => product.id === id)

    products.splice(productIndex, 1)
    productsFile()

    return response.json({ message:'Removido com sucesso!' })
})

function productsFile() {
    fs.readFile('products.json', 'utf-8', (err, data)=>{
        if(err){
            console.log(err)
        }else{
            products = JSON.parse(data)
        }
    })
}

app.listen(4004, ()=> console.log('server 4004 on!'))

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