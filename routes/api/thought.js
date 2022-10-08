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
  const newthought = await thought.create(req.body)
  // console.log(newthought._id.valueOf())
  // ' ' holds the collection name
  console.log(newthought._id.valueOf())
  try {
    const userupdate = await user.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { thoughts: newthought._id.valueOf() } },
      { new: true },
    )
    console.log(userupdate)
    res.json(userupdate)
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
    const updatet = await thought.update({
      _id: req.params.id,
    })
    res.json(updatet)
  } catch (error) {
    res.json(error)
  }
})

// router.delete('/:id', async (req, res) => {
//   console.log(req.params.objectId, 'ObjectId')
//   console.log(objectId)
//   try {
//     const deletet = await user.findByIdAndRemove(req.params.ObjectId)
//     res.json(deletet)
//   } catch (error) {
//     res.json(error)
//   }
// })
router.delete('/:id', async (req, res) => {
  console.log(req.params.id, 'id')
  try {
    const deleteU = await thought.findByIdAndRemove(req.params.id)
    res.json(deleteU)
  } catch (error) {
    res.json(error)
  }
})

module.exports = router
