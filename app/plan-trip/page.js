"use client"
import Link from "next/link";

export default function PlanTrip() {
  return (
    <main className="flex flex-col items-center justify-center bg-white text-[#676E7E] p-3 w-full rounded-md">
        You have no trip planned out, choose a <Link href="/plan-trip/hotels"> Hotel</Link> or <Link href="/plan-trip/activity">Activity</Link>
    </main>
  );
}