"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

function SearchBar() {
  const router = useRouter();
  const handleSearch = (e)=>{
    e.preventDefault();
    const name = e.get('name')
    if(name){
      router.push(`/list/name=${name}`)
    }
  }
  return (
    <form className='flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1'>
        <input onSubmit={handleSearch} name='name' type="text" placeholder="Search for products" className='flex-1 bg-transparent outline-none' />
        <button type="submit">
            <Image src='/search.png' alt='search' width={16} height={16} />
        </button>
  
    </form>
  )
}

export default SearchBar