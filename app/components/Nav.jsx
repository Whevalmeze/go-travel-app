import Image from "next/image"

export default function Nav() {
  return (
    <nav className="flex justify-center w-full h-[10%] px-3 py-2 tracking-[-1px]">
        <div className="flex w-full justify-between">
            <div className="flex items-center justify-center gap-3">
                <div className="bg-primary-blue items-center justify-center rounded p-2"><img src="/go-icon.png" width="auto" height="30px" alt="" /></div>
                <div className="relative">
                    <img src="/search-icon.svg" className="absolute left-4 top-[25%]" width="auto" height="auto" alt="" />
                    <input type="text" className="bg-[#F0F2F5] pl-12 py-2 rounded h-full" placeholder="Search" name="search" id="" />
                </div>
            </div>
            <div className="flex gap-5 items-center text-[#647995]">
                <div className="flex gap-1 items-center justify-center flex-col ">
                    <img src="/House.svg" alt="" />
                    <p>Home</p>
                </div>
                <div className="flex gap-1 items-center justify-center flex-col ">
                    <img src="/ChartPieSlice.svg" alt="" />
                    <p>Dashboard</p>
                </div>
                <div className="flex gap-1 items-center justify-center flex-col ">
                    <img src="/Wallet.svg" alt="" />
                    <p>Wallet</p>
                </div>
                <div className="flex gap-1 items-center justify-center flex-col ">
                    <img src="/ListChecks.svg" alt="" />
                    <p>Plan a trip</p>
                </div>
                <div className="flex gap-1 items-center justify-center flex-col ">
                    <img src="/HandCoins.svg" alt="" />
                    <p>Commision for life</p>
                </div>
                <div className="w-[1px] bg-[#98A2B3] h-[40px] py-3">
                    
                </div>
                <button className="bg-primary-blue px-5 py-2 h-fit rounded text-white">Subscribe</button>
                <div className="flex gap-1 items-center justify-center flex-col ">
                    <img src="/Bell.svg" alt="" />
                    <p>Notification</p>
                </div>
                <div className="flex gap-1 items-center justify-center flex-col ">
                    <img src="/Basket.svg" alt="" />
                    <p>Carts</p>
                </div>
                <div className="flex gap-1 items-center justify-center flex-col ">
                    <img src="/PlusSquare.svg" alt="" />
                    <p>Create</p>
                </div>
                <div className="flex gap-1 items-center justify-center flex-row">
                    <img src="/profile.svg" alt="" />
                    <img src="/CaretDown.svg" alt="" />
                </div>
                
            </div>

        </div>
    </nav>
  )
}
