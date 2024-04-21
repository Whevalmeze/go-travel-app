import Image from 'next/image'

export default function Flight() {
  return (
    <div className='flex w-full overflow-hidden rounded-md'>
        <div className='bg-white tracking-tighter w-full'>
          <div className='flex px-6 py-5 gap-2 w-full justify-between'>
            <div className='flex gap-2 items-center'>
              <Image src="/AmericanAirline.svg" alt="" width={24} height={24} />
              <div className='flex flex-col justify-start gap-1'>
                <p className='font-bold text-2xl text-[#1D2433]'>American Airlines</p>
                <div className='flex items-center gap-2'>
                  <p>AA-829</p>
                  <span className='bg-[#0A369D] text-white rounded items-center justify-center tracking-normal flex text-sm px-2 p-1'>First Class</span>
                </div>
              </div>
              </div>
              <div className='flex gap-6 items-center text-sm justify-center'>
                <div className='flex flex-col items-end justify-end'>
                  <p className='font-bold text-[#1D2433] text-xl'>08:35</p>
                  <p>Sun, 20 Aug</p>
                </div>
        
                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between w-full'>
                    <Image src="/AirplaneTakeoff.svg" alt="" width={20} height={20}/>
                    <p>Duration: 1h 45m</p>
                    <Image src="/AirplaneLanding.svg" alt="" width={20} height={20}/>
                  </div>
                  <div>
                    <div className='bg-[#E7F0FF] rounded-full min-w-[300px] h-[8px] flex items-center justify-center'><div className='min-h-full w-[40%] bg-primary-blue rounded-full'></div></div>
                  </div>
                  <div className='flex justify-between w-full'>
                    <p className='font-bold'>LOS</p>
                    <p>Direct</p>
                    <p className='font-bold'>SIN</p>
                  </div>
                </div>
                <div className='flex flex-col items-start justify-end'>
                  <p className='font-bold text-[#1D2433] text-xl'>09:55</p>
                  <p>Sun, 20 Aug</p>
                </div>
              </div>
              <div className='flex tracking-[-1px] items-center text-[28px] text-[#1D2433] font-bold'>
                <Image src="/CurrencyNgn.svg" alt="" width={28} height={28} />
                <p>123,450.00</p>
              </div>
            </div>
          <div className='flex gap-4 px-6 tracking-[-1px] font-medium py-5 border-y-[1px] border-[#E4E7EC]'>
            Facilities:
            <div className='flex gap-2'>
              <div className='flex gap-1'>
                <Image src="/SuitcaseRollingDark.svg" alt="" width={20} height={20} />
                <p>Baggage: 20kg, Cabin Baggage: 8kg</p>
              </div>
              <div className='flex gap-1'>
                <Image src="/FilmSlate.svg" alt="" width={20} height={20} />
                <p>In flight entertainment</p>
              </div>
              <div className='flex gap-1'>
                <Image src="/ForkKnife.svg" alt="" width={20} height={20} />
                <p>In flight meal</p>
              </div>
              <div className='flex gap-1'>
                <Image src="/Usb.svg" alt="" width={20} height={20} />
                <p>USB Port</p>
              </div>
            </div>
          </div>
          <div className='w-full py-2 flex justify-between tracking-[-1px]'>
            <div>
              <button className='text-[#0D6EFD] font-medium px-6 py-3'>Flight Details</button>
              <button className='text-[#0D6EFD] font-medium px-6 py-3'>Price Details</button>
            </div>
            <button className='text-[#0D6EFD] font-medium px-6 py-3'>Edit Details</button>
          </div>
        </div>
        <button className='bg-[#FBEAE9] flex items-center px-2 justify-center'>
            <img src="/X.svg" alt="" />
        </button>
    </div>
  )
}
