const express = require('express')
const {Client} = require('pg')
const app = express()
const port = process.env.PORT || 3000
const client = new Client()
client.connect()
app.get('/', (req, res) => {
  client.query("SELECT NOW()", (err, res1) => {
    res.send(res1.rows[0])
  })
})
app.listen(port, () => {console.log(`app on port ${port}`)})