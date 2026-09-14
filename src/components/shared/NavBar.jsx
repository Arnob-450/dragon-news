'use client'

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const NavBar = () => {
    const { data: session,isPending } = authClient.useSession();
    const user= session?.user
    console.log(user,'user data');
    return (
        <div className='flex justify-between container mx-auto gap-4 mt-5'>
            <div></div>
              <ul className='flex justify-between items-center gap-6 text-gray-500'>
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about-us">About</NavLink></li>
                <li><NavLink href="/career" className='text-red-500'>Career</NavLink></li>
              </ul>
           {isPending? <span className="loading loading-dots loading-lg"></span>: user? ( <div className=' flex items-center gap-2'>
                  <h2>Hello , {user?.name}</h2>
                  <Image src={user?.image||userAvatar} alt="userAvatar" width={60} height={60} />
                  <button className='btn bg-purple-500 text-white' onClick={async ()=>await authClient.signOut()}>Logout</button> 
                 
           </div>):(
                <button className='btn bg-purple-500 text-white'><Link href={'/login'}>Login</Link></button> 
           )}
        </div>
    );
};

export default NavBar;