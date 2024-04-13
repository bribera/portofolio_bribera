import React from 'react'
import {HiBriefcase} from 'react-icons/hi'

const cursus = [
    {
        year: 2021,
        degree: "Licence économie Appliquée",
        ecole: "FASEG/ UAC",
        icon: <HiBriefcase/>
    },
    {
        year: 2017,
        degree: "BAC D",
        ecole: "CEG Kouhounou Vêdoko",
        icon: <HiBriefcase/>

    }
];

const expericience = [
    {
        year: 2024,
        degree: "Diplome",
        ecole: "Women hight Impact startup preparation academy (WHISPA)",
        icon: <HiBriefcase/>

    },
    {
        year: 2021,
        degree: "Stage professionnel",
        ecole: "Agence béninoise de sécurité sanitaire des aliments (ABSSA)",
        icon: <HiBriefcase/>
    },
]

const Experience = () => {
  return (
    <div className='dark:text-white '>
      {/* expericience  text*/}
      <div className="">
        <p className="text-5xl uppercase text-center text-white leading-normal font-semibold">Cursus & Expérience</p>
      </div>
      {/* differents experiences & Cursus */}
      <div className="container grid grid-cols-2 lg:text-[23px] xl:text-[27px] gap-y-4 my-16 px-10">
        {/* cursus */}
        <div className="flex flex-col gap-y-10 ">
            {
                cursus.map((cursu, index) => {
                    return (
                        <div className="flex  justify-end gap-4 " key={index}>
                            {/* texte */}
                            <div className="flex flex-col gap-y-4 justify-end items-end">
                                {/* year */}
                                <div className="p-2 rounded-full bg-slate-500 text-sm bg-opacity-10">
                                    <p className="">{cursu.year}</p>
                                </div>
                                {/* scholl degree */}
                                <div className="uppercase flex flex-col gap-y-2 leading-relaxed tracking-normal  text-end">
                                    <p className="font-medium leading-relaxed tracking-wider text-lg">{cursu.degree}</p>
                                    <p className="">{cursu.ecole}</p>
                                </div>
                            </div>
                            {/* icon */}
                            <div className="flex flex-col items-center">
                                <div className="p-3 bg-second rounded-full text-xl">
                                 <HiBriefcase/>
                                </div>
                                <div className="">
                                    <div className="w-[1px] h-[70px] bg-slate-300"></div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        {/* experience */}
        <div className="flex flex-col gap-y-10 ">
            {
                expericience.map((expericience, index) => {
                    return (
                        <div className="flex  justify-end gap-4 " key={index}>
                            {/* texte */}
                            <div className="flex flex-col gap-y-4 justify-end items-end">
                                {/* year */}
                                <div className="p-2 rounded-full bg-slate-500  bg-opacity-10 ">
                                    <p className="text-sm lg:text-[20px]">{expericience.year}</p>
                                </div>
                                {/* scholl degree */}
                                <div className="uppercase flex flex-col gap-y-2 leading-relaxed tracking-normal text-end">
                                    <p className="font-medium leading-relaxed tracking-wider text-lg lg:text-xl xl:text-2xl">{expericience.degree}</p>
                                    <p className="">{expericience.ecole}</p>
                                </div>
                            </div>
                            {/* icon */}
                            <div className="flex flex-col items-center">
                                <div className="p-3 lg:p-5 bg-second rounded-full text-xl lg:text-xl">
                                 <HiBriefcase/>
                                </div>
                                <div className="">
                                    <div className="w-[1px] h-[70px] lg:h-[100px] bg-slate-300"></div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Experience
