const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('this api works')
})
app.listen(process.env.PORT || 3000)