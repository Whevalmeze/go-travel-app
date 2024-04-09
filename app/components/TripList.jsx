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
        { trips ? 
            ( 
               (!showForm  && trips.length !== 0) &&
                <div className="w-full h-full p-3 rounded flex flex-col gap-5 tracking-normal bg-white">
                    <div className="flex justify-between">
                        <h1 className="font-bold">All trips</h1>
                        <button onClick={() => {setShowForm(prev => !prev); setSlide(1)}}>Add Trip</button>
                    </div>
                { trips &&
                    trips.map((trip) => (
                        <TripItem trip={trip} />
                        )
                    )
                }
                </div> 
            )
            :
            <div>
                COming soon
            </div> 
        } 
     </>
  );
}
