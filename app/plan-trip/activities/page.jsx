"use client"
import {useState, useEffect} from 'react'
import Image from 'next/image'

export default function Activities() {
  const [activities, setActivities] = useState(null)
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  const url = 'https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions?id=eyJ1ZmkiOi0yMDkyMTc0fQ%3D%3D&sortBy=trending&page=1&currency_code=INR&languagecode=en-us';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
      }
  };
  useEffect(
      () => {
          // try {
          //     fetch(url, options)
          //     .then((response) => response.json())
          //     .then(result => {
          //       console.log(result.data.products)
          //       setActivities(result.data.products)
          //     })
          // } catch (error) {
          //     console.error("I am the error",error);
          // }

      }, [])
  return (
    <div className='bg-[#0054E4] text-white w-full overflow-hidden flex flex-col gap-4 rounded-md px-6 py-4'>
      <div className='flex justify-between items-center'>
        <div className='items-center justify-center flex gap-2'><Image src="/RoadHorizonWhite.svg" width={20} height={20} alt=""/> Activities </div>
        <button className='px-7 py-2 rounded bg-white text-[#344054]'>Add Activities</button>
      </div>
      <div className='flex w-full flex-col  overflow-y-scroll max-h-full scroll-m-2 '>
        {
          activities ? 
          <div className='flex flex-col gap-2'>
                {
                  activities.map(
                      ({id, name, cityName, representativePrice, primaryPhoto, reviewsStats}) => (
                        <div key={id} className='w-full flex gap-2 max-h-[274px] rounded text-[#676E7E] bg-white p-2'>
                            <div className='relative text-[#676E7E]'>
                              <img src="/CaretCircleRight.svg" className='absolute top-[45%] right-[5%]' width={24} height={24} alt="" />
                              <img src={primaryPhoto.small} className='rounded' height={224} width={232} alt="" />
                              <img src="/CaretCircleLeft.svg" className='absolute top-[45%] left-[5%]' width={24} height={24} alt="" />
                            </div>
                            <div className='flex gap-3 flex-col'>
                              <p className='text-black'><strong>{name}</strong></p>
                              <p className='text-black'>{cityName}</p>
                              {/* <p className='flex items-center'><img src="/Star.svg" width={16} height={16} alt="" /> {reviewsStats.allReviewsCount} ( {reviewsStats.percentage} )</p> */}
                              <p>Currency: {representativePrice.currency}</p>
                              <div className='flex'>
                                {/*<span className='flex'><Image src="/CalendarBlank.svg" width={15} height={15} alt="" /> <p>Check in: {property.checkinDate}</p>
                                <Image src="/CalendarBlank.svg" width={15} height={15} alt="" /><p>Check out: {property.checkinDate}</p></span> */}
                              </div>
                              <div className='justify-between'>
                                  <button className='text-primary-blue'>Activity Details</button>
                              </div>
                            </div>
                          </div>
                      )
                  )
              }
          </div>
          : <p className="m-auto ">Activities are loading, please wait ...</p>
        }
      </div>
    </div>
  )
}
