const express = require("express");
const mongoose= require("mongoose")
const app =express();

mongoose.set('strictQuery',true);

mongoose.connect('mongodb://0.0.0.0:27017/MetaGrowth',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("Mongodb Connected..."))
.catch((err)=> console.log(err))

app.listen(3000,()=>{ console.log("Running port 3000")})