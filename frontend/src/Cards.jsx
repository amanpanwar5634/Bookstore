import React from "react";
export default function Cards({item}){
    return(<>
    <div className="mt-3 mb-3 p-3">
    <div className="card bg-base-100 w-80 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-500">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>)
}