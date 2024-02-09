const express = require('express');
const  mongoose  = require('mongoose');
const app = express();
const seedDB = require("./seed")


mongoose
.connect('mongodb://127.0.0.1:27017/quotes')
.then(function() {
    console.log("DB connected")
})
.catch((err)=>{
    console.log("error in the db", err)
})

app.get("/", (req,res)=>{
    res.status(200).json({msg: "hello from root"})
})


// seedDB();


const PORT =8080;
app.listen(PORT, ()=>{
    console.log(`backend server conected at PORT: ${PORT}`)
})