import ActiveLink from "./ActiveLink"

export const DefaultNav = () => {
  return (
    <div className="flex py-2 text-white max-w-screen-xl justify-between w-full">
        <div>
            <img src="/go-icon.png" alt="" />
        </div>
        <div>
            <ul className="flex justify-between align-center gap-4">
                <ActiveLink href='/'><li className="hidden sm:block">Home</li></ActiveLink>
                <ActiveLink href='/hotels'><li className="hidden sm:block">Hotels</li></ActiveLink>
                <ActiveLink href='/flights'><li className="hidden sm:block">Flights</li></ActiveLink>
                <ActiveLink href='/'><li className="hidden sm:block">Packages</li></ActiveLink>
                <ActiveLink href='/'><li>Sign In</li></ActiveLink>
            </ul>
        </div>
    </div>
  )
}
