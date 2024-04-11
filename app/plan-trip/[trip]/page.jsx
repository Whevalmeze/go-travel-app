"use client"
import { fetchTrip } from "@/app/utils/firebaseUtils";
import Image from "next/image";
import { useEffect, useState } from "react";
import Trip from "@/app/components/Trip";

export default function TripPage({ params }) {
  const [trip, setTrip] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tripData = await fetchTrip(params.trip);
        // Extracting date components from checkInDate
        const [checkInYear, checkInMonthIndex, checkInDay] = tripData.checkInDate.split("-").map(Number);
        const [checkOutYear, checkOutMonthIndex, checkOutDay] = tripData.checkOutDate.split("-").map(Number);
        // Getting month name from month index
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const getMonth = (monthIndex) => monthNames[monthIndex - 1]
        const checkInMonth = getMonth(checkInMonthIndex); const checkOutMonth = getMonth(checkOutMonthIndex)
        const checkInDate = checkInDay + " " + checkInMonth + " " + checkInYear
        const checkOutDate = checkOutDay + " " + checkOutMonth + " " + checkOutYear
        setCheckInDate(checkInDate)
        setCheckOutDate(checkOutDate)
        setTrip(tripData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching trip:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.trip]);

  return (
    <section className="bg-white h-full flex flex-col gap-3 rounded p-3">
      {isLoading ? (
        <div className="min-w-full min-h-full">Loading ...</div>
      ) : trip ? (
        <Trip trip={{...trip, checkInDate, checkOutDate}}  /> // Pass trip data along with month
      ) : (
        <div>No trip found</div>
      )}
    </section>
  );
}
