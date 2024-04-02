"use client"
import Link from "next/link";


export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center bg-white gap-4 text-[#676E7E] p-3 w-full rounded-md">
      Welcome, User.
      Are you still rich? <Link href="/plan-trip" ><button className="bg-primary-blue rounded px-6 py-2 text-white"> Plan A Trip!!</button> </Link>
    </main>
  );
}
