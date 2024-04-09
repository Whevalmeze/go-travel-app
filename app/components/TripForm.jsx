"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { addTripToFirebase } from "../utils/firebaseUtils";

export default function TripForm({setSlide, slide, trips, setTrips, setShowForm}) {
    const showCardStyle = "flex w-full m-12 gap-6 flex-col";
    const hideCardStyle = "hidden flex-col w-full gap-6";
    const date = new Date().toISOString().split('T')[0];
    const [tripTitle, setTripTitle] = useState("");
    const [destination, setDestination] = useState("");
    const [tripType, setTripType] = useState("");
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");

    function getPrevSlide(e) {
        e.preventDefault();
        if (slide <= 3) {
          setSlide((prevSlide) => prevSlide - 1);
        }
      }
      function getNextSlide(e) {
        e.preventDefault();
        if (slide <= 3) {
          setSlide((prevSlide) => prevSlide + 1);
        }
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowForm(false)
        setSlide(0)
        // setSearchQuery(location);
        const newTrip = {
        title: tripTitle,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        tripType: tripType,
        destination: destination,
        key: tripTitle + checkInDate + 1,
        };
        addTripToFirebase(newTrip)
        setTripTitle("")
        setCheckInDate("")
        setCheckOutDate("")
        setTripType("")
        setDestination("")
    };

  return (
    <form className="flex bg-white border max-w-[500px] lg:w-[500px] rounded-md gap-1">
                <div className={slide ==1 ? showCardStyle : hideCardStyle}>
                  <h1 className="text-4xl text-black font-bold">Plan a New Trip</h1>
                  <div className="relative w-full min-w-[200px]">
                    <Image src="/AirplaneTilt.svg" className="absolute left-4 top-[25%]" width={20} height={20} alt="" />
                    <input type="text" maxLength={20} minLength={2} placeholder={`Give your trip a name`} name="tripTitle" id="tripTitle"  value={tripTitle} onChange={(e) => setTripTitle(e.target.value)} className="bg-[#fff] border w-full pl-12 py-2 pr-2 rounded h-full" />
                  </div>
                  <div className="flex w-full justify-end">
                    <button className="text-primary-blue" id="plantrip" onClick={(e) => getNextSlide(e)}>Next</button>
                  </div>
                </div>
                <div className={slide == 2 ? showCardStyle : hideCardStyle}>
                  <h1 className="text-4xl text-black font-bold">Schedule a Duration</h1>
                  <div className="flex flex-col w-full">
                  <label htmlFor="tripTitle">Trip Title:</label>
                  <input type="date" value={checkInDate} min={date}  className="bg-[#fff] cursor-pointer w-full py-2 px-4 border rounded h-full" onChange={(e)=> setCheckInDate(e.target.value)} name="checkindate" id="" />
                  </div>
                  <div className="flex flex-col w-full">
                    To
                    <input type="date" name="checkoutdate" min={date}  className="bg-[#fff] cursor-pointer w-full py-2 px-4 border rounded h-full" value={checkOutDate} onChange={(e)=> setCheckOutDate(e.target.value)} id="" />
                  </div>
                  <div className="flex w-full justify-between">
                    <button className="text-primary-blue" id="plantrip" onClick={(e) => getPrevSlide(e)}>Back</button>
                    <button className="text-primary-blue" id="plantrip" onClick={(e) => getNextSlide(e)}>Next</button>
                  </div>
                </div>
                <div className={slide ==3 ? showCardStyle : slide == 0 ? hideCardStyle : hideCardStyle} >
                  <h1 className="text-4xl text-black font-bold">Choose A Destination</h1>
                  <div className="flex gap-5">
                    <div className="flex gap-1"><input type="radio" name="triptype" onClick={(e) => setTripType(e.target.value)} id="solo" value='Solo' /> Solo Trip</div>
                    <div className="flex gap-1"><input type="radio" name="triptype" onClick={(e) => setTripType(e.target.value)} id="" value="Family" /> Family Trip</div>
                  </div>
                  <div className="relative w-full min-w-[200px]">
                      <Image src= "/Buildings.svg" className="absolute left-4 top-[25%]" width={20} height={20} alt="" />
                      <input type="text" maxLength={20} minLength={2} placeholder={`Where do you have in mind?`} name="destination" id="destination"  value={destination} onChange={(e) => setDestination(e.target.value)} className="bg-[#fff] border w-full pl-12 py-2 pr-2 rounded h-full" />
                    </div>
                    <Link href='/bahamas-trip' ><button className="bg-primary-blue cursor-pointer rounded px-6 py-2 text-white" onClick={(e)=> {handleSubmit(e)}}>Save</button></Link>
                </div>
    </form>
  );
}
