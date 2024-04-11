import Link from "next/link";
import Image from "next/image";
import fetchTrips, { removeTripFromFirebase } from "../utils/firebaseUtils";

export default function TripItem({ trip, setTrips }) {
  // const [hidden, setHidden] = useState(false);
  const handleDelete = async () => {
    try {
      // Perform deletion operation
      await removeTripFromFirebase(trip.id);
      
      // If deletion is successful, update trips in parent component
      fetchTrips()
        .then(tripsData => {
          setTrips(tripsData);
        })
        .catch(error => {
          console.error("Error fetching trips:", error);
        });
    } catch (error) {
      console.error("Failed to delete trip:", error);
    }
  };

  return (
    <div className={`flex justify-between pl-6 `}>
      <div>
      <Link href={`/plan-trip/${trip.id}`}><h2>{trip.title}</h2></Link>
        <p>{trip.tripType}</p>
      </div>
      <div onClick={handleDelete} className="min-h-full h-[100px] cursor-pointer w-[30px] flex flex-col items-center justify-center hover:bg-[#FBEAE9]">
        <Image src="/cancel.svg" alt="" width={24} height={24} />
      </div>
    </div>
  );
}
