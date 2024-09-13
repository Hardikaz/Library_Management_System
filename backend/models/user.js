const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    userId:String,
    password:String,
    // role:{type:String,enum:["admin","customer"],default:"custmoer"}
})

module.exports=mongoose.model("User",userSchema)