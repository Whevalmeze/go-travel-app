import TrendingCard from './TrendingCard'

const Trending = () => {
     const places = [
        {
            place: "Lagos",
            flag: () => <span>&#127475;&#127468;</span>,
            imgUrl: "/places/lagos.jpg"
        },
        {
            place: "London",
            flag: () => <span>&#127468;&#127463;</span>,
            imgUrl: "/places/london.jpg"
        },
        {
            place: "Abuja",
            flag: () => <span>&#127475;&#127468;</span>,
            imgUrl: "/places/abuja.jpg"
        },
        {
            place: "Ikeja",
            flag: () => <span>&#127475;&#127468;</span>,
            imgUrl: "/places/ikeja.jpg"
        },
        {
            place: "Paris",
            flag: () => <span>&#127467;&#127479;</span>,
            imgUrl: "/places/paris.jpg"
        },
    ]
  return (
    <section className='mt-[100px] w-full'>
        <div className='md:max-w-screen-xl max-w-screen-sm p-8 w-full m-auto gap-2 flex flex-col items-center'>
            <h3 className='text-black text-3xl font-semibold text-left md:px-2 w-full'>Trending Destinations</h3>
            <div className='w-full md:grid md:grid-cols-2 xl:grid-cols-3 flex flex-col wrap gap-3 md:gap-4'>
               { places.map(({place, flag, imgUrl}, key) =>  (
                    <TrendingCard place={place} key={key} span={key} imgUrl={imgUrl} flag={flag} />
                    )
                )}
            </div>
        </div>
    </section>
  )
}

export default Trending