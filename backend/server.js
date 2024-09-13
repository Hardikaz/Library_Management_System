const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bcrypt=require('bcrypt')
const User=require('./models/user')
const app=express();

app.use(cors())
app.use(express.json())
// app.get("/test",(req,res)=>{
//     res.send("Hii");
// })

mongoose.connect('mongodb://localhost:27017/libraryManagementSystem')
.then(console.log("Connected to mongoose Succesfully"))
.catch((error)=>console.log(error.message))

//AdminLogin
app.post("/adminLogin",async (req,res)=>{
 const {adminId,adminPassword}=req.body;
 const hashedPassword=await bcrypt.hash(adminPassword,10);

 try{
    const userDoc=await User.create({userId:adminId,password:hashedPassword});
    res.json(userDoc);
 }
 catch(e)
 {
    res.status(400).json(e);
 }
})

//UserLogin
app.post("/userLogin",async (req,res)=>{
  const{userId,userPassword}=req.body;
  const hashedUserPassword=await bcrypt.hash(userPassword,10)
  try{
    const userDoc=await User.create({userId:userId,password:hashedUserPassword});
    res.json(userDoc);
 }
 catch(e)
 {
    res.status(400).json(e);
 }
})


app.listen(4000,(req,res)=>{
    console.log("Listening at port 4000");
})