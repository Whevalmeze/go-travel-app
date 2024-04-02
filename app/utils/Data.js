// "use client"
// import { useEffect, useState } from "react";
// import

// export default function Data() {
//     const [hotels, setHotels] = useState(null)
//     const API_KEY = process.env.NEXT_PUBLIC_API_KEY
//     const url = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=-2092174&search_type=CITY&arrival_date=2024-04-03&departure_date=2024-04-03&adults=1&children_age=0%2C17&room_qty=1&page_number=1&languagecode=en-us&currency_code=AED';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': API_KEY,
//             'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
//         }
//     };
//     useEffect(
//         () => {
//             try {
//                 fetch(url, options)
//                 .then((result) => result.text())
//                 .then(data => {
//                     console.log(data)
//                     setHotels(data.hotels)
//                 })
//             } catch (error) {
//                 console.error(error);
//             }

//         }, [])
//   return (
//     <div>

//     </div>
//   )
// }



