// Imports
const dotenv = require('dotenv')
const { application } = require('express')
const express = require('express')

const routes = require('./routes')

// Inicializamos application Express 
const app = express()

// Cargamos archivo .env
dotenv.config()

// Cargamos middleware para acceder al body del requere 
app.use(express.json())

app.use('/api', routes)


app.listen(process.env.PORT, () => {
    console.log(`on port ${process.env.PORT}`)
})