const { router } = require('express')
const userrouter = require('./userrouter')

const router = router()

router.use('/users', userrouter)

module.exports = router
