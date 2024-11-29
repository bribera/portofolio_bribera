'use client'
import {ThemeProvider} from 'next-themes'
import ChangeColor from '@/components/ChangeColor'
import { AnimatePresence, motion } from 'framer-motion'
import Transition from '@/components/Transition'
import { useRouter} from 'next/navigation'


export default function ChangeAnimation({ children }) {
  const router = useRouter()
  return (
    <ThemeProvider enableSystem={true} attribute='class'>  
        <ChangeColor className=""/>
        <AnimatePresence mode='wait'>
        <motion.div className="h-screen" key={router.asPath}>
            <Transition />
            {children}
        </motion.div>
        </AnimatePresence>
    </ThemeProvider>
  )
}
