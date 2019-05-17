require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const controller = require('./controller')

app.use(express.json())

massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('database set!')
    app.listen(SERVER_PORT, () => console.log(`nothing is screwed up on ${SERVER_PORT}`))
})