"use client"
import Link from "next/link";

import { usePathname } from "next/navigation";


const NavLink = ({href,className ,children}) => {
    const pathName = usePathname();
    console.log(pathName) ;
    const isActive = href===pathName;
    return (
       <Link href={href} className={`${isActive? "border-b-2 border-b-gray-500 ":""}${className}`} >{children}</Link>
    );
};

export default NavLink;