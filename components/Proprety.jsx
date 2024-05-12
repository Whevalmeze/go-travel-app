import { useRef } from "react"
import PropertyCard from "./PropertyCard"
import Image from "next/image"

const Property = () => {
    const scrollRef = useRef(null)
    const scroll = (e) => {
        e.preventDefault()
        scrollRef.current
    }
     const properties = [
        {
            property: "Hotels",
            imgUrl: "/property/hotels.jpeg",
            imgAlt: "image for  a property"
        },
        {
            property: "Resorts",
            imgUrl: "/property/resorts.jpeg",
            imgAlt: "image for  a property"
        },
        {
            property: "Villas",
            imgUrl: "/property/villas.jpeg",
            imgAlt: "image for  a property"
        },
        {
            property: "Apartments",
            imgUrl: "/property/apartments.jpeg",
            imgAlt: "image for  a property"
        },
    ]
  return (
    <section className='my-[50px] w-full'>
        <div className='p-8 md:max-w-screen-xl w-full m-auto gap-2 flex flex-col items-center'>
            <h3 className='text-black text-3xl w-full md:px-2 text-left font-semibold'>Available Properties</h3>
            <div className="relative w-full overflow-hidden px-2 rounded-md max-w-[96vw]">
                <div className='w-full flex flex-row wrap gap-3 md:gap-4'>
                   { properties.map(({property, imgUrl, imgAlt}, key) =>  (
                                <PropertyCard key={key} imgAlt={imgAlt} property={property} imgUrl={imgUrl} />
                            )
                    )}
                </div>
                <div onClick={(e) => scroll(e)} ref={scrollRef} className='absolute cursor-pointer top-[40%] right-[5px] rounded-full bg-white p-1'>
                    <Image src="/arrowright.svg" width={18} height={18} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Property;