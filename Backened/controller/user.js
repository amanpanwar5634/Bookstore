import User from "../model/user.js";
import bcryptjs from "bcryptjs";//used to hashing password
export const signup=async(req,res)=>{
    try{
        const {fullname,email,password}=req.body;
        const user=await User.findOne({email});
        if(user){return res.status(400).json({message:"you already registered"})}
        const hashPassword=await bcryptjs.hash(password,10)
        const createdUser= new User({
             fullname:fullname,email:email,password:hashPassword,
        });
        await createdUser.save();
        res.status(201).json({message:"User created successfully",
            user:{
            _id:createdUser._id,
            email:createdUser.email,
            password:createdUser.password

        }});}
     catch(error){
        console.log("error",error);
        res.status(500).json({message:"server error"});
     };
    }
    export const login=async(req,res)=>{
        try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        console.log("user->",user);
        const isMatch=await bcryptjs.compare(password,user.password);
        console.log("the value of isMatch->",isMatch);
        if(!user || !isMatch){
            return res.status(400).json({message:"such user not exist"});
        }
        else{
            return res.status(200).json({message:"login successful",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email,
            }})
        }
        }
        catch(error){
             res.status(500).json({message:"sever error"});
        }
    }
