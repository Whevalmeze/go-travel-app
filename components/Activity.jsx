import React from 'react'
import Image from 'next/image'


export default function Activity({id, name="The Museum of Modern Art", cityName, representativePrice, primaryPhoto, reviewsStats}) {
  return (
    <div className='flex w-full overflow-hidden rounded-md'>
        <div className='w-full flex max-h-[274px] font-medium tracking-[-0.6px] text-[#676E7E] bg-white p-4'>
            <div className='relative text-[#676E7E]'>
                <Image src="/CaretCircleRight.svg" className='absolute top-[30%] lg:top-[45%] right-[5%]' width={24} height={24} alt="" />
                <img src="/activity.svg" className='rounded' height={246} width={232} alt="" />
                <Image src="/CaretCircleLeft.svg" className='absolute top-[30%] lg:top-[45%] left-[5%]' width={24} height={24} alt="" />
            </div>
            <div className='flex gap-3 flex-col w-full'>
                    <div  className='flex justify-between'>
                        <div className='px-2 flex flex-col gap-2'>
                            <p className='text-black text-xl'><strong>{name}</strong></p>
                            <p className='text-black max-w-[65%] text-sm'>Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant</p>
                            <div className='flex gap-4'>
                                <p className='flex items-center gap-1 text-primary-blue'><Image src="/MapPin.svg" width={16} height={16} alt="" />Directions</p>
                                <p className='flex items-center gap-1'><Image src="/Star.svg" width={16} height={16} alt="" /> 4.5 (436) </p>
                                <p className='flex items-center gap-1'><Image src="/Clock.svg" width={16} height={16} alt="" />1 Hour </p>
                            </div>
                        </div>
                        <div className='flex flex-col text-[#1D2433]  items-end'>
                            <div className='flex tracking-[-1px] items-center text-[28px] font-bold'>
                                <Image src="/CurrencyNgn.svg" alt="" width={28} height={28} />
                                <p>123,450.00</p>
                            </div>
                            <p>10:30 AM on Mar 19</p>
                        </div>
                    </div>
                <div className='flex justify-between text-[#647995] w-full border-t border-b border-t-[#E4E7EC] border-b-[#E4E7EC] p-2'>
                    <div className='flex gap-3'>What&apos;s included:
                    <div className='items-start flex justify-center gap-1'>
                        Admission to the Empire State Building
                    </div>
                    <div className='items-start text-primary-blue flex justify-center gap-1'>
                        See more
                    </div>
                    </div>
                    <span className='flex gap-2 items-center justify-center'>
                        <span className='flex bg-[#0A369D] p-2 rounded-md text-white gap-1'>
                         Day 1
                        </span>
                        <div className='flex flex-col gap-1 items-center justify-between'>
                            <Image src="/CaretCircleUp.svg" width={20} height={20} alt="" />
                            <Image src="/CaretCircleDown.svg" width={20} height={20} alt="" />
                        </div>
                    </span>
                </div>
                <div className='w-full flex justify-between tracking-[-1px]'>
                    <div>
                        <button className='text-[#0D6EFD] font-medium px-2'>Activity Details</button>
                        <button className='text-[#0D6EFD] font-medium px-2'>Price Details</button>
                    </div>
                        <button className='text-[#0D6EFD] font-medium px-2'>Edit Details</button>
                </div>
            </div>
          </div>
        <button className='bg-[#FBEAE9] flex items-center px-2 justify-center'>
            <img src="/X.svg" alt="" />
        </button>
    </div> 
  )
}
