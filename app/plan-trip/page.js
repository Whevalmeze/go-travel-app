"use client"
import { useEffect, useState } from "react";
import Hotels from "../components/Hotels";

export default function PlanTrip() {
  const [hotels, setHotels] = useState(null)
  // // const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  // const url = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=-2092174&search_type=CITY&arrival_date=2024-04-02&departure_date=2024-04-03&adults=1&children_age=0%2C17&room_qty=1&page_number=1&languagecode=en-us&currency_code=AED';
  // const options = {
  //     method: 'GET',
  //     headers: {
  //         'X-RapidAPI-Key': API_KEY,
  //         'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  //     }
  // };
  // useEffect(
  //     () => {
  //         try {
  //             fetch(url, options)
  //             .then((response) => response.json())
  //             .then(result => {
  //               console.log(result.data.hotels)
  //               setHotels(result.data.hotels)
  //             })
  //         } catch (error) {
  //             console.error("I am the error",error);
  //         }

  //     }, [])
  return (
    <main className="flex flex-col items-center justify-center bg-white text-[#676E7E] p-3 w-full rounded-md">
      {
        hotels ? <Hotels hotels={hotels} /> : <p className="m-auto ">Hotels are loading, please wait ...</p>
      }
    </main>
  );
}
