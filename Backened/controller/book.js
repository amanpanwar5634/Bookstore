 import Book from "../model/book.js";
export const getBook =async(req,res)=>{
    try{
        const books=await Book.find();
        res.send(books);
    }catch(err){
        console.log("error",err);
        res.status(500).json(err);

    }
};