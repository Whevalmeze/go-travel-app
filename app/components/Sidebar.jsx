import Image from "next/image"
import ActiveLink from "./ActiveLink"

export default function Sidebar() {
  return (
    <div className="bg-white sticky top-[20px] lg:min-w-[200px] h-fit py-4 lg:py-8 px-2 lg:px-6 lg:flex flex-col gap-12 rounded-md">
        <div className="flex items-center lg:items-start justify-center gap-6 lg:pl-4 flex-col text-[#647995] tracking-[-1px]">
            <div className="flex items-center gap-0 lg:gap-2 justify-start">
                <Image src="/RoadHorizon.svg" width={24} height={24} alt="" />
                <ActiveLink href="/plan-trip/activities"><p className="hidden lg:block">Activities</p></ActiveLink>
            </div>
            <div className="flex items-center gap-0 lg:gap-2 justify-start">
                <Image src="/Buildings.svg" width={24} height={24} alt="" />
                <ActiveLink href="/plan-trip/hotels"><p className="hidden lg:block">Hotels</p></ActiveLink>
            </div>
            <div className="flex items-center gap-0 lg:gap-2 justify-start">
                <Image src="/AirplaneTilt.svg" width={24} height={24} alt="" />
                <ActiveLink href="/plan-trip/flights"><p className="hidden lg:block">Flights</p></ActiveLink>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <Image src="/Student.svg" width={24} height={24} alt="" />
                <p className="hidden lg:block">Study</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <Image src="/NewspaperClipping.svg" width={24} height={24} alt="" />
                <p className="hidden lg:block">Visa</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <Image src="/SuitcaseRolling.svg" width={24} height={24} alt="" />
                <p className="hidden lg:block">Immigration</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <Image src="/FirstAidKit.svg" width={24} height={24} alt="" />
                <p className="hidden lg:block">Medical</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <Image src="/Package.svg" width={24} height={24} alt="" />
                <p className="hidden lg:block">Vacation Packages</p>
            </div>
        </div>
        <div className="flex xl:flex-row flex-col bg-[#f0f2f5] rounded items-center mt-3 lg:mt-0 lg:p-4 gap-2 justify-center">
            <div className="bg-primary-blue text-white items-center justify-center rounded p-2 xl:p-4">
                Go
            </div>
            <p className="hidden text-center xl:text-start lg:block">Personal Account</p>
            <Image src="/CaretUpDown.svg" className="hidden lg:block" width={24} height={24} alt="" />
        </div>
    </div>
  )
}
