"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModel from "./CartModel";

function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  const isLoggedIn = true;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen(!isProfileOpen);
      setIsCartOpen(false);
    }
  };
  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsProfileOpen(false);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">

      {/* Profile */}
      <Image
        onClick={handleProfile}
        src="/profile.png"
        alt="search"
        width={16}
        height={16}
        className=" cursor-pointer"
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md left-0 top-10 z-20 text-sm bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}


      {/* Notifications */}

      <Image src="/notification.png" alt="search" width={16} height={16} className=" cursor-pointer"/>


      {/* Cart */}

      <div className="relative" onClick={handleCart}>
        <Image
          src="/cart.png"
          alt="search"
          width={16}
          height={16}
          className=" cursor-pointer"

        />
        <div className=" cursor-pointer absolute bg-pink-500 -top-4 -right-3 rounded-full w-5 h-5 text-center text-white text-sm flex items-center justify-center">
          2
        </div>
      </div>{isCartOpen&&<CartModel/>}
    </div>
  );
}

export default NavIcons;
