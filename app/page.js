"use client"
import Link from "next/link";


export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center bg-white text-[#676E7E] p-3 w-full rounded-md">
      Welcome, User.
      Are you still rich? <Link href="/plan-trip" > Plan A Trip!! </Link>
    </main>
  );
}
