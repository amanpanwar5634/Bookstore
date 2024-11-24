import React, { useState ,useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
export default function Freebook(){
  let [books,setBooks]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
    try{
     
    const res=await axios.get("http://localhost:4001/book");
    setBooks(res.data);
    }
    catch(err){
    console.log(err);
    }}
    getBook(); } ,[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
const filterData=books.filter((book)=>book.category==="free");
console.log(filterData);
 
return (<>
<div className="max-w-screeen-2xl container mx-auto md:px-20 px-4 ">
    <div><h1 className="font-bold text-black-400 text-xl md:pb-3 ">Free Offered Courses</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat odit eius quas sint,
     accusamus culpa officia ut labore excepturi, harum voluptatum. Minima iste non libero mollitia impedit cumque facere omnis?</p>
     </div>
<div>
<Slider {...settings}>
         {filterData.map((item)=>(<Cards item={item} keys={item.id}/>))}
      </Slider>
</div>
</div>
</>)    
}