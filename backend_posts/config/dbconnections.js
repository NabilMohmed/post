const { error } = require('console');
const mongoose=require('mongoose')

const dbconnection=()=>{
    mongoose.connect('mongodb://localhost:27017/project1').then(()=>{
        console.log('database connected');
    }).catch((err)=>{
        console.log(err);
    });
} 

module.exports=dbconnection