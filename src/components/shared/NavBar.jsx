import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';

const NavBar = () => {
    return (
        <div className='flex justify-between container mx-auto gap-4 mt-5'>
            <div></div>
              <ul className='flex justify-between items-center gap-6 text-gray-500'>
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about-us">About</NavLink></li>
                <li><NavLink href="/career" className='text-red-500'>Career</NavLink></li>
              </ul>
           <div className=' flex items-center gap-2'>
                  <Image src={userAvatar} alt="userAvatar" width={60} height={60} />
                  <button className='btn bg-purple-500 text-white'><Link href={'/login'}>Login</Link></button>
           </div>
        </div>
    );
};

export default NavBar;