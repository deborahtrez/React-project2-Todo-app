const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const todourls = require('./api/todoapi')
const authUrls = require('./api/auth')

dotenv.config()

mongoose.connect( process.env.DB_URI, { useUnifiedTopology: true }, ()=> console.log('Database is connected!'))

app.use(cors())
app.use(express.json())
app.use('/todos', todourls)
app.use('/auth', authUrls)



app.listen(8000, ()=> {
    console.log('Server is running!')
})