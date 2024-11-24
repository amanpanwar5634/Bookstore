 import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.js";//import the routes for the path related to books
import cors from "cors";
import userRouter from "./route/user.js";
const app=express();
app.use(cors());//it need to , to access dataj of other route in other route;
app.use(express.json());//to parse data into json format
dotenv.config();
const port = process.env.PORT || 4000;
const URI=process.env.MongoDBURI;
 //connect mongodb
 try{ 
  mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true});//only for local
  console.log("connect to mongodb");
 }catch(err){
 console.log("error",err);
 }
 //defining route
 app.use("/book",bookRoute);
 app.use("/user",userRouter);
app.listen(port, () => {
  console.log(` app is  listening on port ${port}`)
});