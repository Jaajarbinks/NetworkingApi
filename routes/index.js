const router = require('express').Router()
const thought = require('./api/thought')
const user = require('./api/user')

router.use('/thoughts', thought)
router.use('/users', user)

router.use((req, res) => {
  return res.send('working it out for routes')
})

module.exports = router
