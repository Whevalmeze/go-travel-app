    "use client"
    import { useState } from "react";
    import TripForm from "../../components/TripForm";
    import TripList from "../../components/TripList";
    

    export default function PlanTrip() {
      const [checkInDate, setCheckInDate] = useState("")
      const [checkOutDate, setCheckOutDate] = useState("")
      const [destId,setDestId] = useState("")
      const [searchQuery, setSearchQuery] = useState("");
      const [trips, setTrips] = useState([]);
      const [showForm, setShowForm] = useState(false);
      const [slide, setSlide] = useState(1);
      return (
        <main className="flex flex-col justify-center tracking-tighter text-[#676E7E] h-full w-full rounded-md">
          <div className="w-full h-full flex flex-col items-center">
            { (showForm) &&
                  <TripForm slide={slide} trips={trips} setTrips={setTrips} setShowForm={setShowForm} setSlide={setSlide} />
                }
          </div>
          { trips ? 
          <div className="flex flex-col items-center w-full min-h-full">
              <TripList showForm={showForm} trips={trips} setTrips={setTrips} setShowForm={setShowForm} setSlide={setSlide} />
          </div>
          :
            <div>
                COming soon
            </div> }
        </main>
      );
    }
