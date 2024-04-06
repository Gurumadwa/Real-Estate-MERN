const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const userRoute = require('./routes/userRoute')

const app = express()
app.use(express.json());

mongoose.connect(process.env.MONGO).then(()=>console.log('Mongodb connected')).catch((err)=> console.log(err))


app.use('/api/user', userRoute);

app.listen(3000, () => console.log('Server started'));
