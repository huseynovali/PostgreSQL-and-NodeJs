const express = require('express')
require('dotenv').config()
const app = express();




app.use(express.json())




app.listen(5000,()=>console.log('server listen 5000 port !'))