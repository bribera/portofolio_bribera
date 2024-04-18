'use client'
import React, { useEffect, useState } from 'react'
import ButtonCV from './ButtonCV'
import Skills from './Skills'
import Experience from './Experience'

const About = () => {

  // const [haut, setHaut] = useState(false)
  // useEffect(() => {
  //     const handleScroll = () => {
  //         if(window.scrollY > "100 vh") {
  //          setHaut(true)
  //         } else {
  //             setHaut(false)
  //         }
  //     }
      

  //     window.addEventListener("scroll", handleScroll)
      
  //     return(() => {
  //         window.removeEventListener("scroll", handleScroll)
  //     })
  // }, [])

  return (
    <div className='container mx-auto  h-fit pb-[100px]'>
      {/* about me */}
      <div className="relative">
        {/* background texte */}
        <div className="absolute -top-4 left-[35px] lg:top-8 text-center lg:left-[35%]">
          <p className="uppercase text-slate-300 dark:text-slate-500 text-opacity-25 dark:text-opacity-10 text-7xl lg:text-8xl tracking-widest leading-relaxed  font-semibold">
            resume
          </p>
        </div>
        {/* content About */}
        <div className="flex flex-col justify-between gap-y-16 lg:gap-y-8 items-center h-fit-content ">
          {/* text about me */}
          <div className="">
            <div className="flex items-center gap-2 font-semibold dark:text-slate-200 text-6xl pt-8 lg:pt-[60px] uppercase lg:text-8xl">
              <p className="">About</p>
              <span className='text-second'>me</span>
            </div>
          </div>
          {/* chiffres et d'autres */}
          <div className="dark:text-white flex flex-col lg:grid grid-cols-2 lg:gap-5 gap-x-10 text-end lg:pt-[62px]">
            {/* left */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {/* first card */}
              <div className="border border-slate-300 p-6 h-[150px] w-[250px] lg:w-[200px] xl:w-auto  rounded-lg">
                <div className="relative text-second leading-normal">
                  <p className="font-bold text-5xl  ">17</p>
                  <span className='absolute top-0 text-2xl'>+</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <p className="uppercase font-light">Projets Complets</p>
                  <div className="w-8 h-[1px] rounded-full bg-slate-400"></div>
                </div>
              </div>
              {/* second card */}
              <div className="border border-slate-300 p-6 h-[150px] w-[250px] lg:w-[200px] xl:w-auto rounded-lg">
                <div className="relative text-second leading-normal">
                  <p className="font-bold text-5xl  ">2</p>
                  <span className='absolute top-0 text-2xl'>+</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <p className="uppercase font-light ">Années d&apos;expériences</p>
                  <div className="w-8 h-[1px] rounded-full bg-slate-400"></div>
                </div>
              </div>
              {/* third card */}
              <div className="border border-slate-300 p-6 h-[150px] w-[250px] lg:w-[200px] xl:w-auto rounded-lg">
                <div className="relative text-second leading-normal">
                  <p className="font-bold text-5xl  ">1</p>
                  <span className='absolute top-0 text-2xl'>+</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <p className="uppercase fontlight ">Prix gagnés</p>
                  <div className="w-8 h-[1px] rounded-full bg-slate-400"></div>
                </div>
              </div>
              {/* four card */}
              <div className="border border-slate-300 p-6 h-[150px] w-[250px] lg:w-[200px] xl:w-auto rounded-lg">
                <div className="relative text-second leading-normal">
                  <p className="font-bold text-5xl  ">27</p>
                  <span className='absolute top-0 text-2xl'>+</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <p className="uppercase font-light">Clients Heureux</p>
                  <div className="w-8 h-[1px] rounded-full bg-slate-400"></div>
                </div>
              </div>
            </div>
            {/* personal infos */}
            <div className="">
              {/* personnal infos */}
              <div className="text-2xl pb-[5px]">
                <p className="font-semibold uppercase">Informations Personnelles</p>
              </div>
              {/* information */}
              <div className="grid grid-cols-2 gap-4 text-sm lg:text-[14px] xl:text-[20px]  py-4 ">
                {/* left */}
                <div className="flex flex-col gap-y-6 items-end justify-end ">
                  {/* lastname */}
                  <div className="flex  gap-x-1">
                    <p className="font-semibold">Bribéra</p>
                    <p className="text-slate-600 dark:text-slate-400">:Prénoms</p>
                  </div>
                  {/* Nationalité */}
                  <div className="flex gap-x-1">
                    <p className="font-semibold">Béninoise</p>
                    <p className="text-slate-600 dark:text-slate-400">:Nationalité</p>
                  </div>
                  {/* Adresse */}
                  <div className="flex gap-x-1">
                    <p className="font-semibold">Bénin,Abomey-Calavi/Zogbadjè</p>
                    <p className="text-slate-600 dark:text-slate-400">:Adresse</p>
                  </div>
                  {/* mail */}
                  <div className="flex gap-x-1">
                    <p className="font-semibold">agossoubenie@gmail.com</p>
                    <p className="text-slate-600 dark:text-slate-400">:Email</p>
                  </div>
                  {/* langue */}
                  <div className="flex gap-x-1">
                    <p className="font-semibold">Français, Anglais</p>
                    <p className="text-slate-600 dark:text-slate-400">:Langues</p>
                  </div>

                </div>
                {/* right */}
                <div className="flex flex-col gap-y-6  items-end justify-end">
                  {/* firstname */}
                  <div className="flex gap-x-1">
                    <p className="font-semibold">AGOSSOU</p>
                    <p className="text-slate-600 dark:text-slate-400">:Nom</p>
                  </div>
                  {/* Age */}
                  <div className="flex gap-x-1">
                    <p className="font-semibold">22ans</p>
                    <p className="text-slate-600 dark:text-slate-400">:Age</p>
                  </div>
                  {/* Available */}
                  <div className="flex gap-x-1">
                    <p className="font-semibold text-blue-700">Disponible</p>
                    <p className="text-slate-600 dark:text-slate-400">:Freelance</p>
                  </div>
                  {/* phone */}
                  <div className="flex gap-x-1">
                    <p className="font-semibold">+229 XXX XXX</p>
                    <p className="text-slate-600 dark:text-slate-400">:Téléphone</p>
                  </div>
                  {/* langue */}
                  <div className="flex gap-x-1">
                    <p className="font-semibold">Bribéra AGOSSOU</p>
                    <p className="text-slate-600 dark:text-slate-400">:LinkedIn</p>
                  </div>

                </div>
              </div>
              {/* downlod CV */}
              <div className="">
                <ButtonCV />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* separator */}
      <div className=" flex justify-center my-16">
        <div className="w-[150px] h-[1px] rounded-full bg-slate-400"></div>
      </div>

      {/* skills */}
      <div className="">
        <Skills/>
      </div>

      {/* separator */}
      <div className=" flex justify-center mt-16 lg:my-16">
        <div className="w-[150px] h-[1px] rounded-full bg-slate-400"></div>
      </div>

      
      {/* experience */}
      <div className="">
        <Experience/>
      </div>
    </div>

  )
}

export default About
