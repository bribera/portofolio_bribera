import React from 'react'
import ServiceSlide from './ServiceSlide'


const Services = () => {
  return (
    <div className="h-full">
      {/* services */}
      <div className="relative ">
        {/* background texte */}
        <div className="absolute -top-5 left-[24%] xl:top-8 text-center xl:left-[35%]">
          <p className="uppercase text-slate-300 dark:text-slate-500 text-opacity-25 dark:text-opacity-10 text-8xl tracking-widest leading-relaxed  font-semibold">
            done
          </p>
        </div>
        {/* content Services */}
        <div className="flex flex-col justify-between gap-y-16 xl:gap-y-8 items-center h-full">
          {/* text services */}
          <div className="">
            <div className="flex items-center gap-2 font-semibold dark:text-slate-200 text-6xl pt-8 xl:pt-20 uppercase">
              <p className="">My</p>
              <span className='text-second'>Services</span>
            </div>
          </div>
          {/* differents services */}
          <div className="dark:text-white w-full">
             <ServiceSlide />            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
