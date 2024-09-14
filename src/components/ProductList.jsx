import Image from "next/image";
import Link from "next/link";
import React from "react";

function Items(){
    return (
        <Link href="/" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src={`https://picsum.photos/200/300?random=${Math.random() * 1000}`}
            // src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-linear duration-500"
          />
          <Image
            // src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src={`https://picsum.photos/200/300?random=${Math.random() * 1000}`}
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
      <div className="flex justify-between">
        <span className="font-medium">Product Name</span>
        <span className="font-semibold">$69</span>
      </div>
      <div className="text-sm text-gray-500">Description</div>
      <button className="rounded-2xl ring-1 ring-pink-500 text-pink-500 py-2 px-4 text-xs hover:bg-pink-500 hover:text-white">Add To Cart</button>
      </Link>
    )
}

function ProductList() {
  return (
    <div className="flex mt-12 flex-wrap justify-between gap-x-8 gap-y-16">
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
    </div>
  );
}

export default ProductList;
