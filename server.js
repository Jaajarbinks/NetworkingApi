const express = require('express')
const mongoose = require('mongoose')
const db = require('./config/connection')
// const routes = require('./routes')
const mongodb = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

const app = express()
const PORT = process.env.PORT || 3001

const connectionStringURI = 'mongodb://127.0.0.1:27017/NetworkingApi'

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/NetworkingApi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`))
