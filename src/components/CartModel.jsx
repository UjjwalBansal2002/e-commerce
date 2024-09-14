"use client";

// import Image from "next/image";
import React from "react";
import CartItem from "./CartItem";

function CartModel() {
  const carItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-10 right-0 flex flex-col gap-6 z-20">
      {!carItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
        <h2 className="text-xl">Shoping Cart</h2>
        {/* items */}
        <div className="flex flex-col gap-8">
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </div>

        {/* bottom */}
        <div>
            <div className="flex items-center justify-between font-semibold">
                <span>Subtotal</span>
                <span>$69</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">Lorem ipsum dolor sit amet.</p>
            <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-gray-300 ring-1">View Cart</button>
                <button className="rounded-md py-3 px-4 bg-black text-white">CheckOut</button>
            </div>
        </div>
        </>
      )}
    </div>
  );
}

export default CartModel;
