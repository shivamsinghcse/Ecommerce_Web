const express = require('express');
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    "msg": "welcome to my website"
  })
})

app.listen(process.env.PORT, () => {
  console.log(`[running] https://localhost:${process.env.PORT}`)
})
