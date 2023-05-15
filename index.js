const express = require('express')
const app = express()

const  puerto = 8585
const path = require ('path')
const hbs = require('hbs') 
app.use(express.static('public'))
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname+'/public/partials')

app.get('/', (req, res) => {
res.render('index')
})

app.listen(puerto, ()=>{
    console.log('escuchando puertito')
})

