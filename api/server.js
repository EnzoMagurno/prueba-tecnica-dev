const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./db/pool')
require('dotenv').config()

sequelize.sync()
.then(()=>{
    console.log('Modelos sincronizados')
})
.catch((error)=>{
    console.log(`Error al sincronizar`,error)
})

const app = express();

const port = process.env.SERVER_PORT || 3000

app.use(bodyParser.json())
app.use('/', productRoutes)

app.listen(port, ()=>{
    console.log(`Server escuchando en puerto ${port}`)
})