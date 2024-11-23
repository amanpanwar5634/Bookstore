import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form"
export default function Contact(){
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data);
    return (<><div>
    <Navbar/>
    <div className="max-w-screeen-2xl flex items-center justify-center container mx-auto md-px-20 px-3 mt-28">
     <div className="border rounded  mx-auto bg-slate-100">
        <h1 className="font-bold text-3xl text-black text-center">Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2 px-4 py-1">
    <h3 className="mb-1">Name</h3>
    <input type="text" placeholder="Enter name" className="w-80 mt-1 outline-none bg-white-300 px-2"
     {...register("name", { required: true })} ></input>
      <br></br><p className="text-red-600 mt-2">{errors.name && <span>This field is required</span>}</p>
     
    </div>
    <div className="mt-2 px-4 py-1">
    <h3 className="mb-1">Email</h3>
    <input type="email"placeholder="Enter email" className="w-80 mt-1 outline-none bg-white-300 rounded px-2" 
   {...register("email", { required: true })} ></input>
      <br></br><p className="text-red-600 mt-2">{errors.email && <span>This field is required</span>}</p>
   
    </div>
    <div className="mt-2 px-4 py-1"> 
    <h3 className="mb-1">Message</h3>
     <textarea className="w-80 mt-1 outline-none bg-white-300 row-5 cols-5 px-2 rounded" 
     {...register("text", { required: true })} ></textarea>
      <br></br><p className="text-red-600 mt-2">{errors.text && <span>This field is required</span>}</p>
    </div>
    <div className="mt-2 px-4 py-1">
      <button className="bg-pink-600 text-white font-bold px-4 py-1 rounded-md">Submit</button>
    </div>
        </form>
     </div>
    </div>
    <Footer/>
    </div>
     </>)
}