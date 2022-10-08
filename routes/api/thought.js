const router = require('express').Router()
const { thought, user } = require('../../models')

router.get('/', async (req, res) => {
  // name of collection goes in ' '
  try {
    const allThoughts = await thought.find()
    res.json(allThoughts)
  } catch (err) {
    res.json(err)
  }
})

router.get('/:id', async (req, res) => {
  // name of collection goes in ' '
  try {
    const oneThought = await thought.findOne({
      _id: req.params.id,
    })
    res.json(oneThought)
  } catch (err) {
    res.json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const newthought = await thought.create(req.body)
    res.json(newthought)
  } catch (err) {
    console.log('there is an error creating', err)
    res.json(err)
  }
})

router.post('/:id', async (req, res) => {
  // ' ' holds the collection name
  try {
    const newThought = await user.findByIdAndUpdate({
      thought: req.params.id,
    })
    newThought.save()
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

router.put('/', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
  console.log(req.params.id, 'ObjectId')
  try {
    const deletet = await user.findByIdAndRemove(req.params.ObjectId)
    res.json(deletet)
  } catch (error) {
    res.json(error)
  }
})

module.exports = router
