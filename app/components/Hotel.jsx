import React from 'react'
import Image from 'next/image'


export default function Hotel() {
  return (
    <div className='flex w-full overflow-hidden rounded-md'>
        <div className='w-full flex max-h-[274px] font-medium tracking-[-0.6px] text-[#676E7E] bg-white p-4'>
            <div className='relative text-[#676E7E]'>
                <Image src="/CaretCircleRight.svg" className='absolute top-[30%] lg:top-[45%] right-[5%]' width={24} height={24} alt="" />
                <img src="/HotelImage.png" className='rounded' height={224} width={232} alt="" />
                <Image src="/CaretCircleLeft.svg" className='absolute top-[30%] lg:top-[45%] left-[5%]' width={24} height={24} alt="" />
            </div>
            <div className='flex flex-col w-full py-1'>
                    <div  className='flex justify-between'>
                        <div className='px-2 flex flex-col gap-2'>
                            <p className='text-black text-xl'><strong>Rivera Resort, Lekki</strong></p>
                            <p className='text-black text-sm'>18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1</p>
                            <div className='flex gap-4'>
                                <p className='flex items-center gap-1 text-primary-blue'><Image src="/MapPin.svg" width={16} height={16} alt="" /> Show in map </p>
                                <p className='flex items-center gap-1'><Image src="/Star.svg" width={16} height={16} alt="" /> 8.5 (436) </p>
                                <p className='flex items-center gap-1'><Image src="/Bed.svg" width={16} height={16} alt="" /> King size room </p>
                            </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <div className='flex tracking-[-1px] items-center text-[28px] text-[#1D2433] font-bold'>
                                <Image src="/CurrencyNgn.svg" alt="" width={28} height={28} />
                                <p>123,450.00</p>
                            </div>
                            <p>Total Price: NGN 560,000</p>
                            <p>1 room x 10 nights incl. taxes</p>
                        </div>
                    </div>
                <div className='flex justify-between w-full border-t border-b border-t-[#E4E7EC] border-b-[#E4E7EC] p-2'>
                    <div className='flex gap-3'>Facilities:
                    <div className='items-center flex justify-center gap-1'>
                        <Image src="/SwimmingPool.svg" width={16} height={16} alt="" />
                        Pool
                    </div>
                    <div className='items-center flex justify-center gap-1'>
                        <Image src="/Wine.svg" width={16} height={16} alt="" />
                        Bar
                    </div>
                    </div>
                    <span className='flex gap-2 items-center justify-center'><span className='flex gap-1'>
                    <Image src="/CalendarBlank.svg" width={15} height={15} alt="" /><p>Check in: 20-04-2024 </p>
                    </span>
                    <span className='flex gap-1 items-center justify-center'>
                    <Image src="/CalendarBlank.svg" width={15} height={15} alt="" /><p>Check out: 29-04-2024 </p>
                    </span></span>
                </div>
                <div className='w-full flex justify-between tracking-[-1px]'>
                    <div>
                        <button className='text-[#0D6EFD] font-medium px-2 py-3'>Hotel Details</button>
                        <button className='text-[#0D6EFD] font-medium px-2 py-3'>Price Details</button>
                    </div>
                        <button className='text-[#0D6EFD] font-medium px-2 py-3'>Edit Details</button>
                </div>
            </div>
          </div>
        <button className='bg-[#FBEAE9] flex items-center px-2 justify-center'>
            <img src="/X.svg" alt="" />
        </button>
    </div> 
  )
}
