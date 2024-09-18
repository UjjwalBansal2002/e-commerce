"use client"

import Image from "next/image";
import React, { useState } from "react";


const images=[
    {
        id:1,
        src:`https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600`
    },
    {
        id:2,
        src:`https://images.pexels.com/photos/5088014/pexels-photo-5088014.jpeg?auto=compress&cs=tinysrgb&w=600`
    },
    {
        id:3,
        src:`https://images.pexels.com/photos/14979019/pexels-photo-14979019/free-photo-of-apple-company-products.jpeg?auto=compress&cs=tinysrgb&w=600`
    },
    {
        id:4,
        src:`https://images.pexels.com/photos/5474287/pexels-photo-5474287.jpeg?auto=compress&cs=tinysrgb&w=600`
    },
]

function ProductImages() {
    const [index,setIndex] = useState(0)
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].src}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt8 ">

        {images.map((img,i)=>(
            <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={()=>setIndex(i)}>
                <Image 
                  src={img.src}
                  alt=""
                  fill
                  sizes="30vw"
                  className={`object-cover rounded-md ${index === img.id - 1? 'border-2 border-pink-500' : ''}`}
                  
                />
            </div>
        ))}
         
       
        
      </div>
    </div>
  );
}

export default ProductImages;
