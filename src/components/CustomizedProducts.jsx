import React from 'react'

function CustomizedProducts() {
  return (
    <div className='flex flex-col gap-6'>
        <h4 className='font-medium'>Choose a Color</h4>
        <ul className='flex items-center gap-3'>
            <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500'>
                <div className='absolute w-10 h-10 rounded-full ring-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
            </li>
            <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500'>
            </li>
            <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 relative bg-green-500 cursor-not-allowed'>
            <div className='absolute w-10 h-[2px] bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 '></div>
            </li>
        </ul>
        <h4>Choose a size</h4>
        <ul className='flex items-center gap-3'>
            <li className='ring-1 ring-pink-500 text-pink-500 rounded-md py-1 px-4 cursor-pointer text-sm'>Small</li>
            <li className='ring-1 ring-pink-500 text-white bg-pink-500 rounded-md py-1 px-4 cursor-pointer text-sm'>Medium</li>
            <li className='ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 cursor-pointer text-sm '>Large</li>
        </ul>
        <ul></ul>
    </div>
  )
}

export default CustomizedProducts