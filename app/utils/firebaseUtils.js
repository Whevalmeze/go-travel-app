import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc, getDoc } from 'firebase/firestore';
import app from '@/firebaseConfig';

const db = getFirestore(app);
const tripsCollection = collection(db, "trips");

export const addTripToFirebase = async (tripData) => {
    try {
        const newTripRef = await addDoc(tripsCollection, tripData)
        fetchTrips()
        console.log("Added trip to collections", newTripRef.id)
    } catch (error) {
        console.error("Failed to add trip:", error)
    }
}

export const removeTripFromFirebase = async (id) => {
    try {
        await deleteDoc(doc(db, "trips", id));
    } catch (error) {
        console.error("Failed to delete trip:", error)
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
        return tripsData;
    } catch (error) {
        console.error(error);
        return []
    }
};

export const fetchTrip = async (id) => {
    try {
        const tripSnapshot = await getDoc(doc(db, "trips", id))
        if(tripSnapshot.exists()) {
            const tripData = tripSnapshot.data()
            console.log("Fetched trip data:", tripData)
            return tripData;
        }  else {
            console.error('Trip document does not exist')
            return null
        }
    } catch (error) {
        console.error("Error fetching trips: ",error);
        throw error;
    }
}

export default fetchTrips;