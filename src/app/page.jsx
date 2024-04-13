/* eslint-disable react/no-unescaped-entities */
import ButtonLearn from '@/components/ButtonLearn'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=" h-screen xl:relative">
      {/* background form in orange */}
      <div className="lg:fixed lg:h-[200%] lg:w-[100%] lg:rotate-[-15deg] lg:left-[-83%] lg:top-[-50%] lg:bg-second lg:block lg:-z-10 hidden">

      </div>
      <div className="w-[100%] flex flex-col gap-y-4 lg:gap-y-20 lg:flex-row justify-center items-center h-screen">
        {/* image */}
        <div className="lg:fixed lg:left-[40px] lg:top-[40px]">
          <div className="bg-dark dark:bg-orange-200 dark:drop-shadow-xl dark:lg:rounded-lg w-[150px] h-[150px] lg:w-[350px] lg:h-[calc(100vh-80px)] flex justify-center items-center rounded-full lg:rounded-none ">
            <Image src="/moi.png" className='object-fill w-full h-full' width={500} height={500} alt='me'/>
          </div>
        </div> 
        {/* text */}
        
        <div className="  px-4 flex items-center text-center flex-col gap-y-4 dark:text-white lg:w-[730px] lg:ml-[300px] lg:gap-y-10 lg:text-end lg:items-end ">
          <div className="uppercase font-bold text-4xl py-2 lg:text-6xl">
            <div className="flex justify-center items-center gap-4">
             <p className="text-second pb-2 text-5xl ">.Je suis Bribéra AGOSSOU</p>
             <div className='w-[30px] h-1 bg-second rounded-full'></div>
            </div>
            <p className="">Développeur Web</p>
          </div>
          <p className="pb-4 font-normal leading-relaxed tracking-wide  text-xl lg:text-3xl"> 
          Passionnée de développement web et d'infographie, je crée des expériences numériques captivantes. Explorez mon portfolio pour 
          découvrir mon travail créatif et mes compétences en constante évolution.
          </p>
          <Link href='/portofolio'>   
            <div className="">   
                <ButtonLearn />           
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
