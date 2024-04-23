"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ActiveLink = ({ href, children }) => {
  const pathname = usePathname();

  // Check if the current route matches the href
  const isActive = pathname === href;

  // Define the styling for active and inactive links
  const linkStyle = isActive ? "text-black" : "text-[#647995]" ;

  return (
    <Link className={linkStyle} href={href}>
      {children}
    </Link>
  );
};

export default ActiveLink;
