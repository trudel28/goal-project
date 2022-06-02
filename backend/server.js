const express = require('express')
const { errorHandler } = require('./middlewares/errorMiddleware')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(PORT, ()=> console.log(`Server is running on port: ${PORT}`))