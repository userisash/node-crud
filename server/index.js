const express = require('express')
const app = express()

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://asher:ashermannew@cluster0.ltzx1p7.mongodb.net/FirstMernApp?retryWrites=true&w=majority")

const port = 3001

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})
