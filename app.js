const express = require('express')
// const {Client} = require('pg')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require("body-parser")
// const client = new Client()
// client.connect()

app.use(bodyParser.json())

const dots = require('./dots')
let i = 0;
app.get('/', (req, res) => {
  // client.query("SELECT NOW()", (err, res1) => {
  //   res.send(res1.rows[0])
  // })
  console.log(`i check: ${i}`)
  res.send(`reports = ${i}`)
})

app.get('/pacdots', (req, res) => {
  i++
  res.json(dots)
})

app.post('/location', (req, res) => {
  console.log(req.body.location || "no location")
  console.log(req.body)
  res.json({"resend": !req.body.location})
})

app.listen(port, () => {console.log(`app on port ${port}`)})
