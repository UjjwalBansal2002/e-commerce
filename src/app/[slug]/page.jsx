import CustomizedProducts from "@/components/CustomizedProducts";
import Add from "@/components/Add";
import ProductImages from "@/components/ProductImages";
import React from "react";

function SinglePage() {
  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          aspernatur amet delectus? Mollitia molestias laboriosam aliquam, iure
          facilis pariatur in.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">RS 5000</h3>
          <h2 className="text-2xl font-medium ">RS 4500</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizedProducts/>
        <Add/>
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm mb-4">
          <h4 className="font-medium">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur at quibusdam consectetur illum officia non corrupti aliquam explicabo inventore.</p>
        </div>
        <div className="text-sm mb-4">
          <h4 className="font-medium">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur at quibusdam consectetur illum officia non corrupti aliquam explicabo inventore.</p>
        </div>
        <div className="text-sm mb-4">
          <h4 className="font-medium">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur at quibusdam consectetur illum officia non corrupti aliquam explicabo inventore.</p>
        </div>
        <div className="text-sm mb-4">
          <h4 className="font-medium">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur at quibusdam consectetur illum officia non corrupti aliquam explicabo inventore.</p>
        </div>
        <div className="text-sm mb-4">
          <h4 className="font-medium">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur at quibusdam consectetur illum officia non corrupti aliquam explicabo inventore.</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
