import React from 'react'
import { motion } from 'framer-motion'


const TransitionVariants = {
    initial: {
        x: "100%",
        width: "100%"
    },
    animate: {
        x: "0",
        width: "0"
    },
    exit: {
        x: ["0", "100%"],
        width: ["0", "100%"]
    },
}

const Transition = () => {
  return (
    <div>
      <motion.div className="fixed right-full w-screen top-0 bottom-0 h-screen z-30 bg-second/30 "
            variants={TransitionVariants} 
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{delay: "0.2", duration: "0.6", ease: "easeInOut"}}>
        
      </motion.div>
      <motion.div className="fixed right-full w-screen top-0 bottom-0 h-screen z-30 bg-second/30 "
            variants={TransitionVariants} 
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{delay: "0.4", duration: "0.6", ease: "easeInOut"}}>
        
      </motion.div>
      <motion.div className="fixed right-full w-screen top-0 bottom-0 h-screen z-30 bg-second/30 "
            variants={TransitionVariants} 
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{delay: "0.6", duration: "0.8", ease: "easeInOut"}}>
        
      </motion.div>
    </div>
  )
}

export default Transition
