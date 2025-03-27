require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
const flowerRoutes = require("./routes/flowerRoutes")

const app = express()

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

//middleware
app.use(cors());

app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.use('/api/flowerRoutes', flowerRoutes)

//connect to mangoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        
app.listen(process.env.PORT || 4000, () =>{
    console.log('connected to DB & listening on port', process.env.PORT || 4000)
})
    })
    .catch((error) => {
        console.log(error)
    })
