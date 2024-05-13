import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <section className="py-24 w-full">
        <div className="container m-auto flex items-center justify-center">
            <SignUp />
        </div>
    </section>
    )
}

export default page