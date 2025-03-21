"use client"
import Link from 'next/link'
import Image from "next/image"
import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () =>{
    setMenu(!menu);
  }

  const closeMenu = () =>{
    setMenu(false);
  }
  return (
    <div className='w-full z-50'>
      <div>
        <div className='flex flex-row justify-between md:px-32 px-2 py-2 md:py-2'>
            <div className='flex flex-row items-center cursor-pointer'>
                <span>
                <Image src='/logos.png' alt='logo' width={60} height={60}/>
                </span>
                <h1 className='text-white text-xl md:text-3xl ml-4 mb-2 font-bold'>Frank Perez</h1>
            </div>
            <nav className='hidden md:flex flex-row items-center text-blue-400 !important" text-xl ml-60 font-bold gap-6'>
                <Link href='/' className='hover:text-blue-700 transition-all cursor-pointer'>
                 Home
                 </Link>
                <Link href='#mi' className='hover:text-blue-700 transition-all cursor-pointer'>
                 Sobre Mi
                 </Link>
                <Link href='#reparar' className='hover:text-blue-700 transition-all cursor-pointer'>
                 Servicios
                </Link>
                <Link href='#footer' className='hover:text-blue-700 transition-all cursor-pointer'>
                 Contacto
                </Link>
            </nav>
            <div className='md:hidden flex items-center text-white'>
                {menu ? (
                    <IoClose size={25} onClick={handleChange} className='cursor-pointer'/>
                ):(
                    <TiThMenu size={25} onClick={handleChange} className='cursor-pointer'/>
                )}
            </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-[#01020d] text-blue-400 left-0 top-12 font-semibold text-2xl text-center pt-8 pb-6 gap-1 w-full h-60 transition-transform duration-300 z-50`}>
        <Link href='/' className='hover:text-blue-700 transition-all cursor-pointer' onClick={closeMenu}>
                 Home
                 </Link>
                 <Link href='#mi' className='hover:text-blue-700 transition-all cursor-pointer' onClick={closeMenu}>
                 Sobre Mi 
                 </Link>
                <Link href='#reparar' className='hover:text-blue-700 transition-all cursor-pointer' onClick={closeMenu}>
                 Servicios
                </Link>
                <Link href='#footer' className='hover:text-blue-700 transition-all cursor-pointer' onClick={closeMenu}>
                  Contacto
                </Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar;
 