"use client"
import React from 'react'
import Link from 'next/link'
import {  HiHome, HiUser, HiUserGroup, HiViewGrid } from "react-icons/hi"
import { usePathname, } from 'next/navigation'
import { FaSuitcase } from "react-icons/fa";


const navdata = [
  {
    name:"Acceuil",
    path: "/",
    icon: <HiHome />
  },
  
  {
    name:"About",
    path: "/about",
    icon: <HiUser />
  },
  {
    name:"Services",
    path: "/services",
    icon: <FaSuitcase />
  },
  {
    name:"Portofilio",
    path: "/portofolio",
    icon: <HiViewGrid />
  },
  // {
  //   name:"Blog",
  //   path: "/blog",
  //   icon: <HiUserGroup />
  // },
]

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className='xl:p-0 flex items-center w-full xl:h-[750px] xl:top-[10%] xl:max-w-xl bottom-0 mt-0 lg:right-[1%] xl:right-[2%] z-50 fixed text-3xl md:px-40 xl:text-xl h-max flex-col xl:justify-center xl:w-5 gap-y-4'>
      
      <nav className="flex items-center justify-between backdrop-blur-sm bg-slate-300 dark:bg-gray-700 text-slate-200 w-full  h-[80px] px-4 py-8 text-3xl md:px-40 xl:text-xl xl:w-[40px]  xl:h-[500px] xl:flex-col xl:justify-center xl:rounded-full xl:p-4 gap-y-10 xl:gap-y-[60px]">
        {
          navdata.map((link, index) => {
            return ( 

            <Link className={`${link.path === pathname &&  'text-second'}
                  relative flex items-center group hover:text-second transition-all duration-300`} 
              href={link.path} 
              key={index}>
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-slate-500 dark:bg-white relative flex dark:text-slate-500 text-slate-100  p-[6px] items-center rounded-sm">
                  {/* text */}
                  <div className="text-[12px] leading-none font-semibold">{link.name}</div>
                  {/* triangle */}
                  <div className="border-solid border-l-slate-400 dark:border-l-white font-semibold border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div className="p-2 xl:p-1 bg-gray-500 rounded-full "> {link.icon}</div> 
            </Link>
            
            )
          })
        }
      </nav>
    </div>
  )
}

export default Navbar
