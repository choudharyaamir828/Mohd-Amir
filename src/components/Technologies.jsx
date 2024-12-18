import { FaPython } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaGitSquare } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
  initial: {y:-10},
  animate: {
    y: [10,-10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat : Infinity,
      repeatType: "reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial = {{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl ">Technologies
        </motion.h2>
        <motion.div
          whileInView={{opacity:1,x:0}}
          initial = {{opacity:0,x:-100}}
          transition={{duration: 2.5}}
          className="flex flex-wrap items-center justify-center gap-4">
            
            <motion.div
            initial = "initial"
            animate = "animate"
            variants={iconVariants(1.5)}
            className="p-4">
            <FaPython className="text-7xl text-yellow-400" />
            </motion.div>

            <motion.div
              initial = "initial"
              animate = "animate"
              variants={iconVariants(1.5)}
               className='p-4'>
              <FaHtml5 className="text-7xl text-cyan-500" />
            </motion.div>

            <motion.div
              initial = "initial"
              animate = "animate"
              variants={iconVariants(1.5)}
             className='p-4'>
            <FaCss3 className="text-7xl text-red-500" />
            </motion.div>

            <motion.div
              initial = "initial"
              animate = "animate"
              variants={iconVariants(1.5)}
             className='p-4'>
            <FaJsSquare className="text-7xl text-cyan-400" />
            </motion.div>

            <motion.div
              initial = "initial"
              animate = "animate"
              variants={iconVariants(1.5)}
             className='p-4'>
            <FaGitSquare className="text-7xl text-red-400" />
            </motion.div>

            <motion.div
                   initial="initial"
                   animate="animate"
                 variants={iconVariants(1.5)}
                 className="p-4"
                 >
              <FaDatabase className="text-7xl text-blue-600" />
            </motion.div>



        </motion.div>
    </div>
  )
}

export default Technologies