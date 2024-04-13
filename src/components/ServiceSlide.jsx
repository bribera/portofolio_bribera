'use client'
import React from 'react'
import {RxPencil2, RxDesktop, RxReader, RxRocket, RxCamera} from 'react-icons/rx'
// import { MdOutlinePhotoCamera } from "react-icons/md";


import { motion } from 'framer-motion'
import {variants} from '../variants'


import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const doing =[
    {
        icon: <RxDesktop />,
        title:'Website',
        description:" Conception de sites web  :  ' Du design responsive à la navigation intuitive, chaque site que je crée allie esthétique et fonctionnalité pour offrir une expérience utilisateur exceptionnelle. ' ",
    },
    {
        icon: <RxPencil2 />,
        title:'Infographie',
        description:"Création visuelle (logo, prospectus et autres) : ' Mes visuels sont conçus pour capturer l'essence de chaque marque, alliant créativité et professionnalisme pour transmettre un message clair et mémorable. ' ",
    },
    {
        icon: <RxCamera />,
        title:'Photographie',
        description:"Capture des moments uniques : ' À travers mon objectif, je capture des moments uniques et des émotions authentiques, transformant chaque instant en souvenirs intemporels. ' ",
    },
    {
        icon: <RxReader />,
        title:'Marketing digital',
        description:"Contenu pour le marketing digital (vidéo et autres) : ' Des vidéos percutantes aux stratégies de contenu engageantes, je transforme les idées en campagnes digitales dynamiques qui attirent et convertissent votre public cible. ' ",
    },
]

const ServiceSlide = () => {
  return (
    <Swiper
    breakpoints = {{
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
    }}
    autoplay={true}
    freeMode={true}
    pagination={{
        clickable: true,
        // dynamicBullets:true,
    }}
    modules={[FreeMode, Pagination]}
    className= "container h-[240px] xl:h-[340px]  xl:w-auto mx-auto"
    >
      {
        doing.map((item, index) =>{
            return (
                <SwiperSlide className=" " key={index}>
                    <div className="h-full flex flex-col gap-4 cursor-pointer group justify-center items-center text-center dark:text-white rounded-lg bg-slate-600 bg-opacity-20 xl:p-6 p-4">
                        {/* icon */}
                        <div className="text-2xl font-bold">{item.icon}</div>
                        {/* title & desc */}
                        <div className="flex flex-col gap-4">
                            <div className="text-second font-semibold leading-normal tracking-wide text-3xl">{item.title}</div>
                            <div className="">{item.description}</div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })
      }
    </Swiper>
  )
}

export default ServiceSlide
