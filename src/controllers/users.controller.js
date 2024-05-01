const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  console.log('a')
  res.json({
    status: 'success',
    message: 'Hi Coders!!!!',
    error: 'null',
  })
})

module.exports = router
