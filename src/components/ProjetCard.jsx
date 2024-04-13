import React from 'react'
import  Link from 'next/link'
import { IoCodeSlashSharp } from 'react-icons/io5'
import { HiEye } from 'react-icons/hi'

const ProjetCard = ({image, description, gitUrl, previewUrl, categorie}) => {
  return (
    <div className='container mx-auto  pb-[60px]'>
      <div className="h-[200px]  rounded-t-lg group relative border-2 border-second"
      style={{
        background: `url(${image})`,
        backgroundSize: "cover"
      }}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-second/60 bg-opacity-5 bg-rounded-t-lg hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                <Link href={gitUrl} 
                    className='mr-2 w-14 h-14 border-2 relative rounded-full border-white hover:border-slate-100 transition-all'>
                   <IoCodeSlashSharp className='h-10 w-10 text-white cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:text-white'/> 
                </Link>
                <Link href={previewUrl} 
                    className='w-14 h-14 border-2 relative rounded-full border-white hover:border-slate-100'>
                    <HiEye className='h-10 w-10 text-white cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:text-white'/> 
                </Link>
        </div>
        
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 ">
            <h5 className='text-xl font-semibold mb-2'>{categorie}</h5>
            <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  )
}

export default ProjetCard
