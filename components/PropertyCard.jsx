import Image from 'next/image'

const PropertyCard = ({property, imgUrl, imgAlt}) => {
  return (
    <div className='w-full h-full'>
        <Image className='rounded-md min-w-[300px] min-h-[250px]' width={300} height={250} property={property} src={imgUrl} alt={imgAlt} />
        <p className='text-black text-lg font-medium'>{property}</p>
    </div>
  )
}

export default PropertyCard