"use client"
import Image from "next/image"
import { useState } from "react"
import ActiveLink from "./ActiveLink"

export default function Nav() {
    const [searchtext, setSearchText] = useState("")
  return (
    <nav className="flex justify-center w-full h-[10%] px-3 py-2 tracking-[-1px]">
        <div className="flex w-full justify-between">
            <div className="flex items-center justify-center gap-3">
                <div className="bg-primary-blue items-center justify-center rounded p-2"><Image width={24} height={24} src="/go-icon.png" alt="" /></div>
                <div className="relative">
                    <Image src="/search-icon.svg" className="absolute left-4 top-[25%]" width={20} height={20} alt="" />
                    <input type="text" value={searchtext} onChange={(e) => setSearchText(e.target.value)} className="bg-[#F0F2F5] pl-12 py-2 rounded h-full" placeholder="Search" name="search" id="" />
                </div>
            </div>
            <div className="hidden lg:flex gap-5 items-center text-[14px] xl:text-base text-[#647995]">
                <ActiveLink href="/" ><div className="flex gap-1 items-center justify-center flex-col ">
                    <Image src="/House.svg" width={24} height={24} alt="" />
                    <p className="hidden lg:block">Home</p>
                </div></ActiveLink>
                <div className="flex gap-1 items-center justify-center flex-col ">
                    <Image src="/ChartPieSlice.svg" width={24} height={24} alt="" />
                    <p className="hiddden lg:block">Dashboard</p>
                </div>
                <div className="flex gap-1 items-center justify-center flex-col ">
                    <Image src="/Wallet.svg" width={24} height={24} alt="" />
                    <p className="hiddden lg:block">Wallet</p>
                </div>
                <ActiveLink href="/plan-trip"><div className="flex gap-1 items-center justify-center flex-col ">
                    <Image src="/ListChecks.svg" width={24} height={24} alt="" />
                    <p className="hiddden lg:block">Plan a trip</p>
                </div></ActiveLink>
                <div className="flex gap-1 items-center justify-center flex-col ">
                    <Image src="/HandCoins.svg" width={24} height={24} alt="" />
                    <p className="hiddden lg:block">Commision for life</p>
                </div>
                <div className="w-[1px] bg-[#98A2B3] h-[40px] py-3">
                    
                </div>
                <button className="bg-primary-blue hidden px-5 py-2 h-fit rounded text-white">Subscribe</button>
                <div className="flex gap-1 items-center justify-center flex-col ">
                    <Image src="/Bell.svg" width={24} height={24} alt="" />
                    <p>Notification</p>
                </div>
                <div className="flex gap-1 items-center justify-center flex-col ">
                    <Image src="/Basket.svg" width={24} height={24} alt="" />
                    <p>Carts</p>
                </div>
                <div className="flex gap-1 items-center justify-center flex-col ">
                    <Image src="/PlusSquare.svg" width={24} height={24} alt="" />
                    <p>Create</p>
                </div>
                <div className="flex gap-1 items-center justify-center flex-row">
                    <Image src="/profile.svg" width={52} height={52} alt="" />
                    <Image src="/CaretDown.svg" width={24} height={24} alt="" />
                </div>
                
            </div>

        </div>
    </nav>
  )
}
