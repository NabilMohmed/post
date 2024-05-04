const { timeStamp } = require('console')
const mongoose=require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    password:String,
    repassword:String,
    email:String,
    age:Number
})

const userModel = mongoose.model('user',userSchema)

module.exports=userModel