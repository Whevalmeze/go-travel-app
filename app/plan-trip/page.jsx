    "use client"
    import { useState, useEffect } from "react";
    import TripForm from "../components/TripForm";
    import TripList from "../components/TripList";
    

    export default function PlanTrip() {
      const [searchQuery, setSearchQuery] = useState("");
      const [trips, setTrips] = useState([]);
      const [showForm, setShowForm] = useState(false);
      const [slide, setSlide] = useState(1);
      return (
        <main className="flex flex-col items-center tracking-tighter text-[#676E7E]  min-h-full w-full rounded-md">
          <div className="flex flex-col items-center w-full min-h-full">
              <TripList showForm={showForm} trips={trips} setTrips={setTrips} setShowForm={setShowForm} setSlide={setSlide} />
          </div>
            { (showForm) &&
                  <TripForm slide={slide} trips={trips} setTrips={setTrips} setSlide={setSlide} />
                }
        </main>
      );
    }
