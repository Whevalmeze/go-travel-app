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
    <main className="flex flex-col items-center tracking-tighter bg-white text-[#676E7E] p-3 min-h-full w-full rounded-md">
      
    </main>
  );
}
