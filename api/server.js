const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./db/pool')
const cors = require('cors')
require('dotenv').config()

sequelize.sync()
    .then(() => {
        console.log('Modelos sincronizados')
    })
    .catch((error) => {
        console.log(`Error al sincronizar`, error)
    })

const app = express();

const port = process.env.SERVER_PORT || 3000

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true,
  }));

app.use(bodyParser.json())
app.use(express.json())
app.use('/', productRoutes)


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.listen(port, () => {
    console.log(`Server escuchando en puerto ${port}`)
})