import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
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


export default fetchTrips;