const express = require('express')
const mongoose = require('mongoose')
const db = require('./config/connection')
const routes = require('./routes')
const mongodb = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
// const api = require('./contrrollers')

const PORT = process.env.PORT || 3001
const app = express()
// app.use('/api', api)

const connectionStringURI = 'mongodb://127.0.0.1:27017/NetworkingApi'

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', routes)

// mongoose.connect('mongodb://127.0.0.1:27017/NetworkingApi', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`))
