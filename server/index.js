const express = require('express')
const app = express()
const userModel = require('./models/Users')

const mongoose = require('mongoose')
const cors = require("cors")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://asher:ashermannew@cluster0.ltzx1p7.mongodb.net/FirstMernApp?retryWrites=true&w=majority")

const port = 3001

app.get("/getusers", async (req, res) => {
    try {
        const result = await userModel.find({});
        res.json(result);
    } catch (err) {
        res.json(err);
    }
})

app.post("/createuser", async (req, res) =>{
    const user = req.body
    const newUser = new userModel(user)
    await newUser.save()
    
    res.json(user)
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})
