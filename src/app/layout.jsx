'use client'
// import { Inter } from 'next/font/google'
import './globals.css'
import {ThemeProvider} from 'next-themes'
import Navbar from '@/components/Navbar'
import ChangeColor from '@/components/ChangeColor'
import { useRouter, usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Transition from '@/components/Transition'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  const router = useRouter()
  // const pathname = usePatname()
  return (
    <html lang="en">
      <body className={`relative overflow-auto`}>
        <ThemeProvider enableSystem={true} attribute='class'>  
          <ChangeColor className=""/>
          <AnimatePresence mode='wait'>
            <motion.div className="h-screen" key={router.asPath}>
                <Transition />
                <Navbar />
                {children}
            </motion.div>
          </AnimatePresence>
        </ThemeProvider>
      </body>
    </html>
  )
}
