"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PlanTrip() {
  const [page, setPage] = useState("Destination");
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const date = new Date().toISOString().split('T')[0];
  const [checkInDate, setCheckInDate] = useState(date);
  const [checkOutDate, setCheckOutDate] = useState("");
  const [destinations, setDestinations] = useState(null);
  function handleSubmit (e) {
    e.preventDefault()
    setSearchQuery(location)
    localStorage.setItem("userpref", JSON.stringify({
      "location" : location,
      "checkindate" : checkInDate,
      "checkoutdate" : checkOutDate,
    }))
  }

  useEffect(() => {
    if (location.trim() !== "") {
      const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
      const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${searchQuery}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      fetch(url, options)
        .then((response) => response.json())
        .then((result) => {
          console.log(result.data);
          setDestinations(result.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [searchQuery]);

  return (
    <main className="flex flex-col items-center tracking-tighter bg-white text-[#676E7E] p-3 w-full rounded-md">
      <div className="w-full py-6 px-4 flex flex-col gap-4">
      <div className="text-black">
            <h1 className="text-5xl font-black mb-2">Explore New Boundaries</h1>
            <h1 className="text-base font-light">Find exclusive {page}s everywhere in the world.</h1>
          </div>
        {/* Form */}
        <form action="GET" className="flex min-w-full rounded-md gap-1">
          <div className="relative w-[40%] min-w-[200px]">
            <Image src={`${page.toLowerCase() == "destination" ? "/Buildings.svg" : "/search-icon.svg" }`} className="absolute left-4 top-[25%]" width={20} height={20} alt="" />
            <input type="search" maxLength={20} minLength={2} placeholder={`Search for a ${page}`} name="location" id="location"  value={location} onChange={(e) => setLocation(e.target.value)} className="bg-[#fff] border w-full pl-12 py-2 pr-2 rounded h-full" />
          </div>
          <input type="date" value={checkInDate} min={date}  className="bg-[#fff] cursor-pointer w-[20%] py-2 px-4 border rounded h-full" onChange={(e)=> setCheckInDate(e.target.value)} name="checkindate" id="" />
          <input type="date" name="checkoutdate"  className="bg-[#fff] cursor-pointer w-[20%] py-2 px-4 border rounded h-full" value={checkOutDate} onChange={(e)=> setCheckOutDate(e.target.value)} id="" />
          <input type="submit" value="Search" className="bg-primary-blue cursor-pointer rounded px-6 py-2 text-white" onClick={(e)=> handleSubmit(e)} />
        </form>
      </div>

      <div className="flex w-full flex-col overflow-y-scroll max-h-full scroll-m-2">
       {destinations !== null ? (
  <div className="flex flex-col gap-2">
    {/* Render destinations */}
        {destinations.map(({ country, image_url, hotels, dest_id, region, name }) => (
          <div key={dest_id} className="w-full flex gap-2 max-h-[274px] rounded text-[#676E7E] bg-white p-2">
            <div className="relative text-[#676E7E]">
              <img src="/CaretCircleRight.svg" className="absolute top-[45%] right-[5%]" width={24} height={24} alt="" />
              <img src={image_url} className="rounded" height={224} width={232} alt="" />
              <img src="/CaretCircleLeft.svg" className="absolute top-[45%] left-[5%]" width={24} height={24} alt="" />
            </div>
            <div className="flex gap-3 flex-col w-full px-3 py-1">
              <p className="text-black"><strong>{name}</strong></p>
              <p>{region}, {country}</p>
              <div className="flex justify-between w-full border-t border-b border-t-[#E4E7EC] border-b-[#E4E7EC] py-2">
                <div className="flex gap-3">
                  <div className="items-center flex justify-center gap-1">
                    <Image src="/SwimmingPool.svg" width={16} height={16} alt="" />
                    {hotels} Hotels 
                  </div>
                </div>
              </div>
              <div className="justify-between">
                <button onClick={(e) => set} className="text-primary-blue">Check Hotels</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : location !== "" ? (
      <p className="m-auto">Your search is loading, please wait ...</p>
    ) : null}

      </div>
    </main>
  );
}
