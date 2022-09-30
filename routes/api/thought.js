const router = require('express').router()
const thought = require('../api')

app.get('/', async (req, res) => {
  // name of collection goes in ' '
  try {
    const allThoughts = await thought.find()
    res.json(allThoughts)
  } catch (err) {
    res.json(results)
  }
})

app.get('/:id', async (req, res) => {
  // name of collection goes in ' '
  try {
    const oneThought = await thought.findOne({
      _id: req.params.id,
    })
    res.json(oneThought)
  } catch (err) {
    res.json(results)
  }
})

app.post('/', async (req, res) => {
  // ' ' holds the collection name
  try {
    const newThought = await thought.create(req.body)
    res.json(newThought)
  } catch (err) {
    res.json(err)
  }
})

// app.get('/read', (req, res) => {
//   // name of collection goes in ' '
//   db.collection('')
//     //   .find() finds everything
//     .find()
//     .toArray((err, results) => {
//       if (err) throw err
//       res.send(results)
//     })
// })

app.put('/', async (req, res) => {
  // updates the collection
  try {
    const update = await thought.update({
      _id: req.params.id,
    })
    res.json(update)
  } catch (error) {
    res.json(error)
  }
})

app.delete('/though/:id', async (req, res) => {
  try {
    const deleteT = await thought.delete({
      _id: req.params.id,
    })
    res.json(deleteT)
  } catch (error) {
    res.json(error)
  }
})

model.exports = router
