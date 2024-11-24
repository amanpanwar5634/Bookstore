import mongoose from "mongoose";
const bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String,
});
export default mongoose.model("Book",bookSchema);