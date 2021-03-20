const express = require('express')

require("./db/conn")
const MensRanking = require('./models/mens')
const router = require('./routers/men')

const app = express()
app.use(express.json())
const port = process.env.PORT || 8000

app.use(router)

app.listen(port, () => {
    console.log(`listening to port no ${port}`)
})