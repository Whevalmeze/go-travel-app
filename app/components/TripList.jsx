"use client"
import TripItem from "./TripItem";
import fetchTrips from "../utils/firebaseUtils";
import { useEffect } from "react";


export default function TripList({showForm, setShowForm, setSlide, trips, setTrips}) {
    useEffect(() => {
        fetchTrips()
            .then(tripsData => {
                setTrips(tripsData);
            })
            .catch(error => {
                console.error("Error fetching trips:", error);
            });
    }, []);

  return (
    <>
        { 
            ( 
               (!showForm) &&
                <div className="w-full h-full rounded-md flex flex-col gap-3 tracking-normal bg-white">
                    <div className="flex p-6 justify-between">
                        <h1 className="font-bold">All trips</h1>
                        <button onClick={() => {setShowForm(prev => !prev); setSlide(1)}}>Add Trip</button>
                    </div>
                <div className="flex flex-col">
                    { trips &&
                        trips.map((trip) => (
                            <TripItem key={trip.id} setTrips={setTrips} trip={trip} />
                            )
                        )
                    }
                </div>
                </div> 
            )        
        } 
     </>
  );
}
