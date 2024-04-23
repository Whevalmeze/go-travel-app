"use client"
import {useState, useEffect} from 'react'
import Activities from '@/components/Activities'

export default function Page() {
  const [activities, setActivities] = useState([])
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
        const fetchActivities = async () => {
            try {
            const response = await fetch(url, options)
            const result = await response.json()
            setActivities(result.data.products)
          } catch (error) {
            console.error("I am the error",error);
          }
        };
        fetchActivities()
      }, [])
  return (
      <div className='flex w-full flex-col max-h-full p-2 scroll-m-2 '>
        {
          activities.length !== 0 ? 
          <div className='flex flex-col gap-2'>
               <Activities activities={activities} />
          </div>
          : <p className="m-auto ">Activities are loading, please wait ...</p>
        }
      </div>
  )
}
