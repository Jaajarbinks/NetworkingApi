const express = require('express')

const {} = require('mongoose')

const mongodb = require('mongodb').MongoClient

const app = express()
const port = 3001

const connectionStringURL = 'mongodb://127.0.0.1:27017/shelterDB'

// holds the connection
let db

// $gte = greater than or equal to

// creates a connection to the MongoDB instance
mongodb.connect(
  // connection between app and mongodb instance
  connectionStringURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    db = client.db()
    app.listen(port, () => {
      console.log(`were listening at http://localhost:${port}`)
    })
  },
)

app.use(express.json())

app.post('/create', (req, res) => {
  // name of collection goes in ' '
  db.collection('').insertOne(
    {
      title: req.body.title,
      author: req.body.author,
    },
    (err, results) => {
      if (err) throw err
      res.json(results)
    },
  )
})

app.post('/create-many', (req, res) => {
  // ' ' holds the collection name
  db.collection('').insertMany(
    // ' ' holds the name of what is in front of :
    [{ title: '' }, { title: '' }],
    (err, results) => {
      if (err) throw err
      res.json(results)
    },
  )
})

app.get('/read', (req, res) => {
  // name of collection goes in ' '
  db.collection('')
    //   .find() finds everything
    .find()
    .toArray((err, results) => {
      if (err) throw err
      res.send(results)
    })
})

// app.put('/read', (req, res) => {
// updates the collection
// db.collection.updateOne({'item': 'whatever the item'}, {$set: {'title': 'whatever the new item'}})
// (err, results) => {
//     if (err) throw err
//     res.json(results)
// }
// })

app.delete('/delete', (req, res) => {
  db.collection('').deleteOne(
    { _id: isObjectIdOrHexString(req.body.id) },
    (err, results) => {
      if (err) throw err
      res.json(results)
    },
  )
})
