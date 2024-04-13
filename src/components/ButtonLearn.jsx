import React from 'react'
import {HiArrowCircleRight} from 'react-icons/hi'


const ButtonLearn = () => {
  return (
    <div className='relative flex items-center py-[16px] pr-[70px] pl-[35px] border-second border-solid cursor-pointer 
                    overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out border rounded-full hover:before:w-full before:bg-second hover:text-white dark:hover:text-white drop-shadow-lg before:content-[""] before:-z-10 before:absolute before:top-0 before:left-0 before:block before:h-full before:transition-all before:duration-500 before:ease-in-out'> 
            <button className='pr-2 text-[20px] lg:text-3xl leading-normal tracking-wide font-medium uppercase'>Savoir plus</button>
            <div className="w-[65px] h-[70px] absolute top-0 right-0  rounded-full bg-second flex justify-center items-center text-3xl p-2 text-white text-center">
                <HiArrowCircleRight />
            </div>
    </div>
  )
}

export default ButtonLearn
