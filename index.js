const express = require('express')
require('dotenv').config();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('pradeep.com'); 
})

app.get('/login', (req, res) => {
  res.send('<h1>Hi I am doing well</h1>'); 
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})