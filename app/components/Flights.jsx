import Flight from "./Flight"
import Image from "next/image"

export default function Flights() {
  return (
    <div className='bg-[#F0F2F5] p-4 gap-9 flex flex-col rounded pb-10'>
        <div className='flex justify-between items-center'>
            <div className='items-center justify-center flex gap-2 text-lg text-[#1D2433] font-bold'><Image src="/AirplaneInFlight.svg" width={20} height={20} alt=""/>  Flights </div>
            <button className='px-7 py-2 rounded bg-white text-primary-blue font-medium'>Add Flights</button>
        </div>
        <div className='flex flex-col gap-6'>
            <Flight />
            <Flight />
            <Flight />
        </div>
    </div>  )
}
