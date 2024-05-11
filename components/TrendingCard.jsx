import Image from 'next/image';
import React from 'react'

const TrendingCard = ({place = "Lagos", imgUrl, span, flag = "&#127475;&#127468;"}) => {
  return (
    <div className={`relative overflow-hidden min-w-full xl:w-[${span === 0 ? 900: 400}px] h-[300px] xl:col-span-${span === 0 ? 2 : 0}`}>
        <div className='rounded-lg bg-gradient-to-b overflow-hidden from-gray-400 hover:from-gray-600 transition-all w-full h-full cursor-pointer to-transparent relative'>
            <Image src={imgUrl} width={540} height={300} className='w-full h-full object-cover mix-blend-multiply absolute' alt="" />
        </div>
            <p className='text-white absolute top-4 mx-4  text-xl'>{place} {span} &#127475;&#127468; </p>
    </div>
  )
}

export default TrendingCard;