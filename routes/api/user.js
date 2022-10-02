const router = require('express').Router()
const user = require('../../models')

router.get('/', async (req, res) => {
  // name of collection goes in ' '
  try {
    const allusers = await user.find()
    res.json(allusers)
  } catch (err) {
    res.json(err)
  }
})

router.get('/:id', async (req, res) => {
  // name of collection goes in ' '
  try {
    const oneusers = await user.findOne({
      _id: req.params.id,
    })
    res.json(oneusers)
  } catch (err) {
    res.json(err)
  }
})

router.post('/', async (req, res) => {
  // ' ' holds the collection name
  try {
    const newuser = await user.create(req.body)
    res.json(newuser)
  } catch (err) {
    res.json(err)
  }
})

router.put('/', async (req, res) => {
  // updates the collection
  try {
    const update = await user.update({
      _id: req.params.id,
    })
    res.json(update)
  } catch (error) {
    res.json(error)
  }
})

router.delete('/user/:id', async (req, res) => {
  try {
    const deleteU = await user.delete({
      _id: req.params.id,
    })
    res.json(deleteU)
  } catch (error) {
    res.json(error)
  }
})

module.exports = router
