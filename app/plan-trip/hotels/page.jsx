"use client"
import {useState, useEffect} from 'react'
import Image from 'next/image'

export default function HotelPage() {
  const [userInput, setUserInput] = useState("")
  const getUserInput = (input) => {
    setUserInput(input)
  }
  const [hotels, setHotels] = useState(null)
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  const url = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=-2092174&search_type=city&arrival_date=2024-04-03&departure_date=2024-04-04&adults=1&children_age=0%2C17&room_qty=1&page_number=1&languagecode=en-us&currency_code=AED';
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
          //       console.log(result.data.hotels)
          //       setHotels(result.data.hotels)
          //     })
          // } catch (error) {
          //     console.error("I am the error",error);
          // }

      }, [])
  return (
    <div className='bg-[#344054] text-white w-full overflow-hidden flex flex-col gap-4 rounded-md px-6 py-4'>
      <div className='flex justify-between items-center'>
        <div className='items-center justify-center flex gap-2'><Image src="/Warehouse.svg" width={20} height={20} alt=""/>  Hotels </div>
        <button className='px-7 py-2 rounded bg-white text-[#344054]'>Add Hotels</button>
      </div>
      <div className='flex w-full flex-col overflow-y-scroll max-h-full scroll-m-2 '>
        {
          hotels ? 
          <div className='flex flex-col gap-2'>
                {
                  hotels.map(
                      ({hotel_id, property}) => (
                        <div key={hotel_id} className='w-full flex gap-2 max-h-[274px] rounded text-[#676E7E] bg-white p-2'>
                            <div className='relative text-[#676E7E]'>
                              <img src="/CaretCircleRight.svg" className='absolute top-[45%] right-[5%]' width={24} height={24} alt="" />
                              <img src={property.photoUrls[0]} className='rounded' height={224} width={232} alt="" />
                              <img src="/CaretCircleLeft.svg" className='absolute top-[45%] left-[5%]' width={24} height={24} alt="" />
                            </div>
                            <div className='flex gap-3 flex-col w-full px-3 py-1'>
                              <p className='text-black'><strong>{property.name}</strong></p>
                              <p className='flex items-center gap-1'><img src="/Star.svg" width={16} height={16} alt="" /> {property.reviewScore} ( {property.reviewCount} )</p>
                              <p>Currency: {property.currency}</p>
                              <div className='flex justify-between w-full border-t border-b border-t-[#E4E7EC] border-b-[#E4E7EC] py-2'>
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
                                  <Image src="/CalendarBlank.svg" width={15} height={15} alt="" /><p>Check in: {property.checkinDate}</p>
                                </span>
                                <span className='flex gap-1 items-center justify-center'>
                                  <Image src="/CalendarBlank.svg" width={15} height={15} alt="" /><p>Check out: {property.checkinDate}</p>
                                </span></span>
                              </div>
                              <div className='justify-between'>
                                  <button className='text-primary-blue'>Hotel Details</button>
                              </div>
                            </div>
                          </div>
                      )
                  )
              }
          </div>
          : <p className="m-auto ">Hotels are loading, please wait ...</p>
        }
      </div>
    </div>
  )
}
