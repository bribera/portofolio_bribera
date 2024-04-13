import React from 'react'

const skills =[
  {
    language : "Php",
    pourcentage : 50
  },
  {
    language : "JavaScript",
    pourcentage : 60
  },
  {
    language : "Wordpress",
    pourcentage : 80
  },
  {
    language : "React",
    pourcentage : 85
  },
  {
    language : "Next JS",
    pourcentage : 90
  },
  {
    language : "HTML",
    pourcentage : 70
  },
  {
    language : "CSS",
    pourcentage : 75
  },
  {
    language : "JQuery",
    pourcentage : 60
  },
  {
    language : "Photoshop",
    pourcentage : 70
  },
  {
    language : "Canvas",
    pourcentage : 75
  },
]

const Skills = () => {
  return (
    <div className='dark:text-white'>
      {/* text my skills */}
      <div className="">
        <p className="text-5xl uppercase text-center leading-normal font-semibold">Mes Compétences</p>
      </div>
      {/* differents skills */}
      <div className="container grid grid-cols-2 xl:grid-cols-4 xl:gap-8 py-[30px]">
       {
        skills.map((skill, index) => { 
          {/* first */}
          return (
          <div className="flex flex-col gap-y-4 items-center" key={index}>
            {/* cercle */}
            <div className="c100 p50">
              <span className="">{skill.pourcentage}%</span>
              {/* <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div> */}
              <div className="chart">
                <svg viewBox="0 0 36 36">
                  <path
                    className="circle"
                    stroke="#d2d3d4"
                    strokeWidth="2"
                    fill="none"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="bar"
                    stroke="#ffb400"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${skill.pourcentage}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
            </div>
            {/* text */}
            <div className="">
              <p className="uppercase text-center leading-normal tracking-widest text-md lg:text-2xl xl:text-3xl">{skill.language}</p>
            </div>
          </div>
          )
        })
       }
      </div>
    </div>
  )
}

export default Skills
