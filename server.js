require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const flowerRoutes = require("./routes/flowerRoutes")

const app = express()

//middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.use('/api/flowerRoutes', flowerRoutes)

//connect to mangoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        
app.listen(process.env.PORT, () =>{
    console.log('connented to DB & listening on port', process.env.PORT)
})
    })
    .catch((error) => {
        console.log(error)
    })
