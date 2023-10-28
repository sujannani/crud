const express=require("express");
const mongoose=require("mongoose");
const studentRoute=require("./controller/studentRoute");
const bodyParser=require('body-parser');
const cors=require('cors');
mongoose.set("strictQuery",true);

const app=express();

mongoose.connect("mongodb+srv://sujan:12345@cluster0.ffc0exe.mongodb.net/schooldb");
var db=mongoose.connection;
db.on("open",()=>{console.log("db connected")});
db.on("error",()=>{console.log("error")})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/studentRoute",studentRoute);

app.listen(4000,()=>{
    console.log("server started at 4000");
})