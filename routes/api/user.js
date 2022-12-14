const router = require('express').Router()
const { user } = require('../../models')

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
  // console.log(req.body, 'body')
  // ' ' holds the collection name
  try {
    const newuser = await user.create(req.body)
    res.json(newuser)
  } catch (err) {
    console.log('there is an error creating', err)
    res.json(err)
  }
})

router.put('/:id', async (req, res) => {
  // updates the collection
  try {
    const updateuser = await user.findByIdAndUpdate(
      req.params.id,
      { userName: req.body.userName, email: req.body.email },
      { new: true },
    )
    res.json(updateuser)
  } catch (error) {
    res.json(error)
  }
})

router.delete('/:id', async (req, res) => {
  console.log(req.params.id, 'id')
  try {
    const deleteU = await user.findByIdAndRemove(req.params.id)
    res.json(deleteU)
  } catch (error) {
    res.json(error)
  }
})

module.exports = router
