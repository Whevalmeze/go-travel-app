
export default function Hotels ({hotels}) {
  return (
    <div className="flex flex-col bg-[#344054]">
        Hotels available are:
         {
            hotels.map(
                ({hotel_id, property}) => (
                    <div key={hotel_id}>
                        <p>Name: {property.name}</p>
                        <p>Rank: {property.rankingPosition}</p>
                        <p>Currency: {property.currency}</p>
                        <p>Available from: {property.checkin.fromTime} to {property.checkin.untilTime}</p>
                        <img src={property.photoUrls[0]} alt="" />
                    </div>
                )
            )
         }
    </div>
  )
}
