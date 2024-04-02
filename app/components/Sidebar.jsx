
export default function Sidebar() {
  return (
    <div className="bg-white w-[20%] h-full py-8 px-6 flex flex-col gap-12 rounded-md">
        <div className="flex justify-center gap-6 pl-4 flex-col text-[#647995] tracking-[-1px]">
            <div className="flex items-center gap-2 justify-start">
                <img src="/RoadHorizon.svg" width="auto" height="auto" alt="" />
                <p>Activities</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <img src="/Buildings.svg" width="auto" height="auto" alt="" />
                <p>Hotels</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <img src="/AirplaneTilt.svg" width="auto" height="auto" alt="" />
                <p>Flights</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <img src="/Student.svg" width="auto" height="auto" alt="" />
                <p>Study</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <img src="/NewspaperClipping.svg" width="auto" height="auto" alt="" />
                <p>Visa</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <img src="/SuitcaseRolling.svg" width="auto" height="auto" alt="" />
                <p>Immigration</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <img src="/FirstAidKit.svg" width="auto" height="auto" alt="" />
                <p>Medical</p>
            </div>
            <div className="flex items-center gap-2 justify-start">
                <img src="/Package.svg" width="auto" height="auto" alt="" />
                <p>Vacation Packages</p>
            </div>
        </div>
        <div className="flex bg-[#f0f2f5] rounded items-center p-4 gap-2 justify-center">
            <div className="bg-primary-blue text-white items-center justify-center rounded p-4">
                Go
            </div>
            <p>Personal Account</p>
            <img src="/CaretUpDown.svg" width="auto" height="auto" alt="" />
        </div>
    </div>
  )
}
