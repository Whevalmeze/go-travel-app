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
    <div className={`flex justify-between pl-6 border-b`}>
      <div className="py-3">
      <Link href={`/plan-trip/${trip.id}`}><h2 className="text-2xl hover:text-primary-blue font-semibold">{trip.title}</h2></Link>
        <span>{trip.tripType} Trip in {trip.destination}</span>
      </div>
      <div className="cursor-pointer w-[30px] mr-7 flex flex-col items-center justify-center">
        <Image onClick={handleDelete} src="/cancel.svg" alt="" width={24} height={24} />
      </div>
    </div>
  );
}
