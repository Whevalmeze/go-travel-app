import Image from "next/image"

const HomePageForm = ({page, checkInDate, checkOutDate, date, location, setLocation, setCheckInDate, setCheckOutDate, setSearchQuery}) => {
    function handleSubmit (e) {
        e.preventDefault()
        setSearchQuery(location)
      }
  return (
    <form className="flex absolute bottom-[-60px] bg-amber-500 p-2 text-black min-w-full rounded-md gap-1">
        <div className="relative w-[40%] min-w-[200px]">
        <Image src={`${page.toLowerCase() == "destination" ? "/Buildings.svg" : "/search-icon.svg" }`} className="absolute left-4 top-[25%]" width={20} height={20} alt="" />
        <input type="search" maxLength={20} minLength={2} placeholder={`Search for a ${page}`} name="location" id="location"  value={location} onChange={(e) => setLocation(e.target.value)} className="bg-[#fff] border w-full pl-12 py-2 pr-2 rounded h-full" />
        </div>
        <input type="date" value={checkInDate} min={date}  className="bg-[#fff] hidden lg:block cursor-pointer w-[25%] py-2 px-4 border rounded h-full" onChange={(e)=> setCheckInDate(e.target.value)} name="checkindate" id="" />
        <input type="date" name="checkoutdate" min={date}  className="bg-[#fff] hidden lg:block cursor-pointer w-[25%] py-2 px-4 border rounded h-full" value={checkOutDate} onChange={(e)=> setCheckOutDate(e.target.value)} id="" /> 
        <input type="submit" value="Search" className="bg-[#003b95] cursor-pointer rounded px-6 py-2 text-white" onClick={(e)=> handleSubmit(e)} />
    </form>  )
}

export default HomePageForm