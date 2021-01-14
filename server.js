const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://Sansari:Sara1983@cluster0.j3anv.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser:true})
const connection = mongoose.connection;
connection.once('open', function(){
    console.log('MONGODB ')
})
app.get('/', function(req,res){
    console.log('in root');
    res.send({message:'SERVER UP!!!'})
})


app.listen('3000', function(req,res){
    console.log('listening on port 3000')
})