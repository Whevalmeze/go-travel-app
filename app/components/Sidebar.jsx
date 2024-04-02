import Image from "next/image"
import ActiveLink from "./ActiveLink"

export default function Sidebar() {
  return (
    <div className="bg-white w-[20%] h-full py-8 px-6 flex flex-col gap-12 rounded-md">
        <div className="flex justify-center gap-6 pl-4 flex-col text-[#647995] tracking-[-1px]">
            <div className="flex items-center gap-2 justify-start">
                <Image src="/RoadHorizon.svg" width={24} height={24} alt="" />
                <ActiveLink href="/plan-trip/activities"><p>Activities</p></ActiveLink>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <Image src="/Buildings.svg" width={24} height={24} alt="" />
                <ActiveLink href="/plan-trip/hotels"><p>Hotels</p></ActiveLink>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <Image src="/AirplaneTilt.svg" width={24} height={24} alt="" />
                <ActiveLink href="/plan-trip/flights"><p>Flights</p></ActiveLink>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <Image src="/Student.svg" width={24} height={24} alt="" />
                <p>Study</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <Image src="/NewspaperClipping.svg" width={24} height={24} alt="" />
                <p>Visa</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <Image src="/SuitcaseRolling.svg" width={24} height={24} alt="" />
                <p>Immigration</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <Image src="/FirstAidKit.svg" width={24} height={24} alt="" />
                <p>Medical</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <Image src="/Package.svg" width={24} height={24} alt="" />
                <p>Vacation Packages</p>
            </div>
        </div>
        <div className="flex bg-[#f0f2f5] rounded items-center p-4 gap-2 justify-center">
            <div className="bg-primary-blue text-white items-center justify-center rounded p-4">
                Go
            </div>
            <p>Personal Account</p>
            <Image src="/CaretUpDown.svg" width={24} height={24} alt="" />
        </div>
    </div>
  )
}
