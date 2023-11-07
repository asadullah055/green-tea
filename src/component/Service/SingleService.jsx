import React from "react";

function SingleService({ service }) {
  const { title, description, price, images } = service;
  return (
    <div className="border shadow-md rounded p-3 flex flex-col items-center justify-between">
      <div className="">
        <img src={images[0]} alt="" className="border" />
        <h4 className="font-semibold py-3">{title}</h4>
        <h3 className="font-bold text-lg text-custom">$ {price}</h3>
        <p className="text-sm font-medium ">{description}</p>
      </div>
      <button className="bg-custom text-white rounded-xl p-3 px-5">
        Add to cart
      </button>
    </div>
  );
}

export default SingleService;
