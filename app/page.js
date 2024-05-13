"use client"
import { DefaultNav } from "@/components/DefaultNav";
import Footer from "@/components/Footer";
import HomePageForm from "@/components/HomePageForm";
import Property from "@/components/Proprety";
import Trending from "@/components/Trending";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [page, setPage] = useState("Destination");
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const date = new Date().toISOString().split('T')[0];
  const [checkInDate, setCheckInDate] = useState(date);
  const [checkOutDate, setCheckOutDate] = useState("");
  const [destinations, setDestinations] = useState(null);


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
    <>
    <main className="w-full">
      <div className="w-full p-4 bg-[#003b95]">
        <div className="flex flex-col m-auto text-white max-w-screen-xl items-center tracking-tighter p-3 w-full rounded-md">
          <DefaultNav />
          <div className="w-full py-10 tracking-normal relative flex flex-col gap-4">
            <div className="py-6">
                <h1 className="text-5xl font-black mb-2">The whole world awaits</h1>
                <h1 className="text-xl font-light">Find exclusive {page}s everywhere in the world.</h1>
            </div>
            {/* Form */}
            <HomePageForm page={page} location={location} setSearchQuery={setSearchQuery} setCheckInDate={setCheckInDate} setCheckOutDate={setCheckOutDate} setLocation={setLocation} date={date} checkInDate={checkInDate} checkOutDate={checkOutDate} />
          </div>
        </div>
      </div>

      <div className=" max-w-screen-xl m-auto w-full mt-12 p-4 flex-col overflow-y-scroll max-h-full scroll-m-2">
       {destinations !== null ? (
      <div className="flex flex-col w-full m-auto gap-2">
       {/* Render destinations */}
        {destinations.map(({ country, image_url, hotels, dest_id, region, name }) => (
          <div key={dest_id} className="w-full flex gap-2 max-h-[274px] rounded-md text-[#676E7E] bg-[#fffffff5] p-2">
            <div className="relative text-[#676E7E]">
              <Image src="/CaretCircleRight.svg" className="absolute top-[45%] right-[5%]" width={24} height={24} alt="" />
              <img src={image_url} className="rounded" height={224} width={232} alt="" />
              <Image src="/CaretCircleLeft.svg" className="absolute top-[45%] left-[5%]" width={24} height={24} alt="" />
            </div>
            <div className="flex gap-3 flex-col w-full px-3 py-1">
              <p className="text-black"><strong>{name}</strong></p>
              <p>{region ? region + ", " : ""} {country}</p>
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
      <p className="m-auto">Your search is loading, please wait ..</p>
    ) : null}

      </div>
      <Trending />
      <Property />
    </main>
    <Footer />
    </>
  );
}
