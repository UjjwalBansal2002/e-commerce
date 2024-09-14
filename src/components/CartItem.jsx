import React from "react";
import Image from "next/image";


function CartItem() {
  return (
    <div className="flex gap-4">
      <Image
        src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={72}
        height={96}
        alt=""
        className="object-cover rounded-md"
      />

      <div className="flex flex-col justify-between w-full ">
        {/* top */}
        <div>
          <div className="flex items-center justify-between gap-8">
            <h1 className="font-semibold">Product Name</h1>
            <div className="p-1 bg-gray-50 rounded-sm">$69</div>
          </div>
          <div className="text-sm text-gray-500">Availabel</div>
        </div>
        {/* bottom */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Qty.2</span>
          <span className="text-blue-500">Remove</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
