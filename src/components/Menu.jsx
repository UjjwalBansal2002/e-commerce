"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Menu() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div >
        <Image src='/menu.png' width={28} height={28} alt='menu' className='cursor-pointer' onClick={()=>setIsOpen(!isOpen)}/>
        {isOpen&&(<div className='absolute bg-black text-white left-0 top-20 h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center gap-10 text-xl z-10'>
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Logout</Link>
            <Link href="/">Cart(1)</Link>
        </div>)}
    </div>
    
  )
}

export default Menu