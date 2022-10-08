const { router } = require('express')

const router = router()

router.get('/', (req, res) => {
  res.send('hit the user point')
})

module.exports = router
