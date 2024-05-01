const express = require('express')
const { port } = require('./config/server')
const router = require('./router')

const app = express()

router(app)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
