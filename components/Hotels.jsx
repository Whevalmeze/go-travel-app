import React from 'react'
import Hotel from './Hotel'
import Image from 'next/image'

export default function Hotels() {
  return (
    <div className='bg-[#344054] text-white w-full overflow-hidden flex flex-col gap-4 rounded-md px-6 pb-20 py-4'>
      <div className='flex justify-between items-center'>
        <div className='items-center justify-center flex gap-2'><Image src="/Warehouse.svg" width={20} height={20} alt=""/>  Hotels </div>
        <button className='px-7 py-2 rounded bg-white text-[#344054]'>Add Hotels</button>
      </div>
      <div className='flex gap-5 w-full flex-col max-h-full scroll-m-2 '>
        <Hotel />
        <Hotel />
        <Hotel />
      </div>
    </div>
  )
}

