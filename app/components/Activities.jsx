import React from 'react'
import Activity from './Activity'
import Image from 'next/image'

export default function Activities({activities}) {
  return (
    <div className='bg-[#0054E4] text-white w-full overflow-hidden flex flex-col gap-4 rounded-md px-6 pb-10 py-4'>
      <div className='flex justify-between items-center'>
        <div className='items-center justify-center flex gap-2'><Image src="/Warehouse.svg" width={20} height={20} alt=""/>  Activities </div>
        <button className='px-7 py-2 rounded bg-white text-[#344054]'>Add Activities</button>
      </div>
      <div className='flex w-full gap-5 flex-col max-h-full scroll-m-2 '>
          { activities && activities.length !== 0  ?
                      activities.map(({id, name, cityName, representativePrice, primaryPhoto, reviewsStats}) => (
                          <Activity key={id} id={id} name={name} cityName={cityName} representativePrice={representativePrice} primaryPhoto={primaryPhoto} reviewsStats={reviewsStats} />
                      ))
                    : 
              <div>
                You have no activity or you are offline 
              </div>
          }
      </div>
    </div>
  )
}

