import ActiveLink from "./ActiveLink"

export const DefaultNav = () => {
  return (
    <div className="flex py-2 text-white max-w-screen-lg justify-between w-full">
        <div>
            <img src="/go-icon.png" alt="" />
        </div>
        <div>
            <ul className="flex justify-between align-center gap-4">
                <ActiveLink href='/'><li>Home</li></ActiveLink>
                <ActiveLink href='/hotels'><li>Hotels</li></ActiveLink>
                <ActiveLink href='/flights'><li>Flights</li></ActiveLink>
                <ActiveLink href='/'><li>Packages</li></ActiveLink>
                <ActiveLink href='/'><li>Sign In</li></ActiveLink>
            </ul>
        </div>
    </div>
  )
}
