'use client'
import React, { useEffect, useState } from 'react'
 import { useTheme } from 'next-themes'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";



const ChangeColor = () => {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false)   

    
    useEffect(() => {
        // const theme = localStorage.getItem("theme")
        // if (theme === "dark") {
            //     setDarkMode(true)
            // }
            setMounted(true)
    }, [])
        
    if(!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme

    // useEffect(() => { 
    //     if (darkMode) {
    //         document.documentElement.classList.add("dark")
    //         localStorage.setItem('theme', 'dark')
    //     } else {
    //         document.documentElement.classList.remove("dark")
    //         localStorage.setItem('theme', 'light')
    //     }
    // }, [darkMode]) 


  return ( 
    <div> 
      <div className=" absolute top-5 right-[1%] z-50" >         
           {
               currentTheme === 'dark' ? (
                   <button className="bg-gray-700  text-center rounded-full cursor-pointer dark:bg-gray-700 border-second border-2 p-2" onClick={() => setTheme('light')}>
                        <IoSunnyOutline className='ml-auto text-xl text-white' />
                    </button>
            ) 
            :
            (
                <button className="bg-gray-500  rounded-full cursor-pointer dark:bg-gray-300 border-second border-2 p-2 text-center" onClick={() => setTheme('dark')}> 
                    <IoMoonSharp className='ml-auto  text-white' />           
                </button>
            )           
            
            } 
                {/* <div className="absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 dark:bg-white"
                style={darkMode ? {left: "2px"} : {right: "2px"}}>
                </div> */}
    
      </div>
    </div>
  )
}

export default ChangeColor
