import React from "react";
import Navbar from "./Navbar";
import list from "./list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
export default function Course(){
    return(<>
    <div className="max-w-screeen-2xl container mx-auto md-px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">We're delighted to have you!
            <span className="text-pink-600 ">Here:)</span></h1>
        <p className="mt-12 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Repellat maxime asperiores, doloremque unde nemo sapiente a similique 
            earum adipisci rem porro? Quibusdam voluptas nam veniam rerum?
             Corporis molestiae praesentium possimus.
        </p>
        <Link to="/">
        <button className="font-bold mt-3 bg-pink-500 rounded-md px-4 py-2 text-white hover:bg-pink-600 duration-300">Back</button>
        </Link>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3">
            {list.map((item)=>(<Cards key={item.id} item={item}/>))}
        </div>
        </div>
    </div>
    </>)
}