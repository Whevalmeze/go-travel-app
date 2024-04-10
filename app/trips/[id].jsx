import { fetchTrip } from "@/app/utils/firebaseUtils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Trip({ params }) {
  const router = useRouter();
  const slug = router.query.id;

  useEffect(() => {
    fetchTrip(slug);
  }, [slug]);

  return (
    <section className="bg-white h-full flex flex-col gap-3 rounded p-3">
      <div className="flex flex-col gap-3 ">
        <div className="relative">
          <Image
            src="/ArrowLeft.svg"
            className="left-4 absolute top-4 "
            width={40}
            height={40}
            alt=""
          />
          {/* <div className="bg-"></div> */}
          <Image
            src="/banner.png"
            className="w-full h-[150px] md:h-[200px]"
            width={1412}
            height={200}
            alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row items-start gap-3 md:gap-0 md:items-center justify-between w-full">
          <div className="flex tracking-[-1px] flex-col gap-1">
            <div className="text-[#7A4504] bg-[rgb(254,244,230)] w-fit text-sm p-2 gap-2 font-medium flex items-center justify-center">
              <div className="flex items-center gap-1 justify-center">
                <Image
                  src="/CalendarBlankStroke.svg"
                  width={16}
                  height={16}
                  alt=""
                />
                <span>21 March 2024</span>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <Image src="/ArrowRight.png" width={16} height={16} alt="" />
                <span>21 April 2024</span>
              </div>
            </div>
            <h2 className="text-black text-2xl font-bold tracking-[-1%]">
              {slug}
            </h2>
            <span className="flex items-center font-medium gap-2">
              <p>New York, United States Of America</p>{" "}
              <div className="h-[18px] bg-[#D0D5DD] w-[2px]"></div>{" "}
              <p>Solo Trip</p>
            </span>
          </div>
          <div className="h-full w-full md:w-fit flex items-center md:items-start ">
            <div className="flex flex-row w-full justify-between md:justify-start md:w-fit md:flex-col items-center md:items-end  gap-2">
              <button className="bg-[#E7F0FF] rounded px-14 py-3">
                <Image src="/UserPlus.svg" width={18} height={18} alt="" />
              </button>
              <div className="flex items-center py-4">
                <Image src="/box.svg" width={40} height={40} alt="" />
                <Image src="/xx.svg" width={69} height={40} alt="" />
              </div>
            </div>
            <Image
              src="/DotsThree.png"
              className="m-2"
              width={30}
              height={30}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col item-center md:flex-row gap-1">
        <div className="bg-[#000031] tracking-tight flex flex-col gap-2 max-w-[300px] text-white rounded p-5">
          <h3 className="font-bold text-lg">Activities</h3>
          <p className="mb-7">
            Build, personalize, and optimize your itineraries with our trip
            planner.
          </p>
          <button className="bg-[#0D6EFD] rounded w-full px-12 py-4">
            Add Activities
          </button>
        </div>
        <div className="bg-[#E7F0FF] tracking-tight flex flex-col gap-2 max-w-[300px] text-[#1D2433] rounded p-5">
          <h3 className="font-bold text-lg">Hotels</h3>
          <p className="mb-7">
            Build, personalize, and optimize your itineraries with our trip
            planner.
          </p>
          <button className="bg-[#0D6EFD] rounded w-full px-12 text-white py-4">
            Add Hotels
          </button>
        </div>
        <div className="bg-[#0D6EFD] tracking-tight flex flex-col gap-2 max-w-[300px] text-white rounded p-5">
          <h3 className="font-bold text-lg">Flights</h3>
          <p className="mb-7">
            Build, personalize, and optimize your itineraries with our trip
            planner.
          </p>
          <button className="bg-white rounded w-full px-12 py-4 text-[#0D6EFD]">
            Add Flights
          </button>
        </div>
      </div>
    </section>
  );
}
