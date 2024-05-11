import Image from 'next/image'
import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className='bg-black py-10'>
        <div className='max-w-screen-xl p-4 mx-auto'>
            <div className='flex justify-between'>
                <Image src="/go-icon.png" width={50} height={50} alt="" />
                <div>
                    <ul className='flex gap-3 text-white'>
                        <li>Home</li>
                        <li>Hotels</li>
                        <li>Activities</li>
                    </ul>
                </div>
            </div>
            <div className='text-center'>
                Copyright &copy; {year}
            </div>
        </div>
    </footer>
  )
}

export default Footer