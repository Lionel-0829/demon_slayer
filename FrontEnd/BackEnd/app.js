const express= require('express')
const path= require('path')
const cors= require('cors')
const app= express()
require('dotenv').config()
const PORT= process.env.PORT || 5000;

app.use(cors())

app.use(express.json())

app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})