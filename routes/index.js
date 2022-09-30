const router = require('express').Router()
const apiRoutes = require('./api')

router.use('/api', apiRoutes)

router.use((req, res) => {
  return res.send('working it out for routes')
})

model.exports = router
