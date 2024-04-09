    "use client"
    import Image from "next/image";
    import Link from "next/link";
    import { useState, useEffect } from "react";
    import { getFirestore, collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore';
    import app from "@/firebaseConfig";

    export default function PlanTrip() {
      const showCardStyle = "flex w-full m-12 gap-6 flex-col";
      const hideCardStyle = "hidden flex-col w-full gap-6";
      const db = getFirestore(app);
      const tripsCollection = collection(db, "trips");
      const [slide, setSlide] = useState(1);
      const [trips, setTrips] = useState([]);
      const [showForm, setShowForm] = useState(false);
      const [tripTitle, setTripTitle] = useState("");
      const [destination, setDestination] = useState("");
      const [tripType, setTripType] = useState("");
      const [searchQuery, setSearchQuery] = useState("");
      const date = new Date().toISOString().split('T')[0];
      const [checkInDate, setCheckInDate] = useState(date);
      const [checkOutDate, setCheckOutDate] = useState("");
      
      function handleSubmit(e) {
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
      }

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
      const addTripToFirebase = async (tripData) => {
        try {
          const newTripRef = await addDoc(tripsCollection, tripData)
          fetchTrips()
          console.log("Added trip to collections", newTripRef.id)
        } catch (error) {
          console.error("Failed to add trip:", error)
        }
      }
      const fetchTrips = async () => {    
        try {
          const querySnapshot = await getDocs(tripsCollection);
          const tripsData = [];
          querySnapshot.forEach((doc) => {
            tripsData.push({ id: doc.id, ...doc.data() });
          });
          console.log(tripsData)
          console.log(querySnapshot)
          setTrips(tripsData);
        } catch (error) {
          console.error(error);
        }
      };
      

      useEffect(() => {
        fetchTrips()
      }, []);

      // useEffect(() => {
      //   if (location.trim() !== "") {
      //     const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
      //     const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${searchQuery}`;
      //     const options = {
      //       method: "GET",
      //       headers: {
      //         "X-RapidAPI-Key": API_KEY,
      //         "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      //       },
      //     };

      //     fetch(url, options)
      //       .then((response) => response.json())
      //       .then((result) => {
      //         console.log(result.data);
      //         setDestinations(result.data);
      //       })
      //       .catch((error) => {
      //         console.error("Error fetching data:", error);
      //       });
      //   }
      // }, [searchQuery]);

      return (
        <main className="flex flex-col items-center tracking-tighter text-[#676E7E]  min-h-full w-full rounded-md">
          { (!showForm && trips.length != 0) &&
            <div className="w-full h-full p-3 rounded flex flex-col gap-5 tracking-normal bg-white">
              <div className="flex justify-between">
                <h1 className="font-bold">All trips</h1>
                <button onClick={() => {console.log(showForm, slide); setShowForm(prev => !prev); setSlide(1)}}>Add Trip</button>
              </div>
              { 
                trips.map(
                  trip => (
                    <div key={trip.key}>
                          <h2>{trip.title}</h2>
                      </div>
                  )
                )
              }
            </div>

          }
          <div className="flex flex-col items-center w-full h-full bg-white">

          </div>
          { (showForm) &&
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
              }
        </main>
      );
    }
