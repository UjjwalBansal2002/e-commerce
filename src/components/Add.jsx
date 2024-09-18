"use client";
import React, { useState } from "react";

function Add() {
  const [Quantity, setQuantity] = useState(1);

  //   temporary

  const stock = 5;

  const handleInc = () => {
    if (Quantity < stock) {
      setQuantity(1+Quantity);
    }
  };
  const handleDec = () => {
    if (Quantity > 1) {
      setQuantity(Quantity - 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4>Choose Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button className="cursor-pointer text-xl" onClick={handleDec}>
              -
            </button>
            {Quantity}
            <button className="cursor-pointer text-xl" onClick={handleInc}>
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">{stock} items</span> left! <br />{" "}
            {"Dont't"} miss it
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-pink500 text-pink-500 px-4 py-2 hover:bg-pink-500 hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Add;
