'use client'
import React, { useState } from 'react'
import ProjetTag from './ProjetTag'
import ProjetCard from './ProjetCard'

const works = [
  {
    id: 1,
    categorie: "Logo",
    title: "happy Science",
    image: "/logo-blanc.png",
    description: "Réalisation d'un logo pour un projet sensibilisation écologique visant à protection de l'environnement.",
    tag: ["All", "Logo"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    categorie: "Logo",
    title: "happy Science",
    image: "/protegeons.jpg",
    description: "Logo pour un projet sur la lutte basée sur le genre. une solution qui pourra permettre aux concernées de parler de s'exprimer et dénoncer leurs malfaisants.",
    tag: ["All", "Logo"],
    gitUrl: "/",
    previewUrl: "/", 
  },
 
  {
    id: 3,
    categorie: "Web",
    title: "happy Science",
    image: "/cas1.png",
    description: "Un site web pour un projet d'introduction des sciences informatiques depuis le bas âge. Permettre aux enfants de savoir comment utiliser les ordinateurs à bon escient. Organiser des évènements pour la sensibilisation des parents à ce sujet.",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
 
  {
    id: 4,
    categorie: "Web",
    title: "happy Science",
    image: "/cas2.png",
    description: "Un projet de sensibilisation sur la pollution de l'environnement. Conseils, questions, réponses et des vidéos pour appuyer cette solution web",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
   id: 5,
    categorie: "Prospectus",
    title: "happy Science",
    image: "/japonais.jpg",
    description: "Un centre de formation qui fait la promotion sur sa formation en japonais qu'il offre ",
    tag: ["All", "Prospectus"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
   id: 6,
    categorie: "Prospectus",
    title: "happy Science",
    image: "/anglais.jpg",
    description: "Un centre de formation qui fait la promotion sur sa formation en anglais qu'il offre ",
    tag: ["All", "Prospectus"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
   id: 7,
    categorie: "Prospectus",
    title: "happy Science",
    image: "/loto.jpg",
    description: "Un centre de formation qui fait la promotion sur un centre de lotorie visa  ",
    tag: ["All", "Prospectus"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    categorie: "Portofolio",
    title: "happy Science",
    image: "/portofolio.png",
    description: "Un portofolio d'un web développeur responsive attrayant",
    tag: ["All", "Portofolio"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    categorie: "Portofolio",
    title: "happy Science",
    image: "/protofolio1.png",
    description: "Un portofolio d'un web développeur responsive attrayant ",
    tag: ["All", "Portfolio"],
    gitUrl: "/",
    previewUrl: "/",
  },
]

const Portofilo = () => {

  const [tag, setTag] = useState("All")

  const handleTagChange = (newTag) => (
    setTag(newTag)
  )

  const filteredProjects = works.filter((project) => 
    project.tag.includes(tag)
  )

  return (
    <div className='dark:text-white  overflow-auto '>
       {/* portofolio */}
       <div className="relative">
        {/* background texte */}
        <div className="absolute -top-5 left-[24%] xl:top-8 text-center xl:left-[35%]">
          <p className="uppercase text-slate-300 dark:text-slate-500 text-opacity-25 dark:text-opacity-10 text-8xl tracking-widest leading-relaxed  font-semibold">
            Works
          </p>
        </div>
        {/* content Portofolio */}
        <div className="dark:text-white flex flex-col justify-between gap-y-16 xl:gap-y-8 items-center h-full">
          {/* text my portofolio */}
          <div className="">
            <div className="flex items-center gap-2 font-semibold dark:text-slate-200 text-6xl pt-8 xl:pt-20 uppercase">
              <p className="">My</p>
              <span className='text-second'>Portofolio</span>
            </div>
          </div>
          {/* projets */}
          <div className=" text-white flex flex-row gap-x-2 xl:gap-x-4 ">
            <ProjetTag 
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
            />
            <ProjetTag 
            onClick={handleTagChange}
            name="Logo"
            isSelected={tag === "Logo"}
            />
            <ProjetTag 
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
            />
            <ProjetTag 
            onClick={handleTagChange}
            name="Prospectus"
            isSelected={tag === "Prospectus"}
            />
            <ProjetTag 
            onClick={handleTagChange}
            name="Portofolio"
            isSelected={tag === "Portofolio"}
            />
          </div>
          <div className="container flex flex-col gap-y-2 xl:grid xl:grid-cols-3 gap-4 pb-[30px] w-full h-full ">
            {
              filteredProjects.map((project, id) => (
                <ProjetCard
                key={project.id} 
                categorie={project.categorie} 
                description={project.description} 
                image={project.image}
                tags={project}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portofilo
