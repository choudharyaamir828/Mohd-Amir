
import profilePic from "../assets/MohdAmirProfile.jpeg"
import {HERO_CONTENT} from "../constants"
import {motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse ">
            <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:p-8  ">
                <motion.img
                 src={profilePic} alt="Mohd Amir"
                 width={650}
                 height={650}
                 className="border border-stone-900 rounded-full  w-96 h-96 object-cover" 
                 initial={{x:100,opacity:0}}
                 animate = {{x:0,opacity: 1}}
                 transition={{duration:1,delay: 1.5}}
                 />
            </div>
            </div>
            <div className="w-full lg:w-1/2 ">
            <motion.div
            initial = "hidden"
            animate = "visible"
             className="flex flex-col items-center lg:items-start mt-10">
                <h2 className="pb-2 text-4xl tracking-tighter 
                lg:text-8xl">Mohd Amir</h2>
                <span className="bg-gradient-to-r from-stone-300
                to-stone-600 bg-clip-text text-3xl tracking-tight
                text-transparent">Full stack Developer </span>
                <p className="my-2 max-w-lg py-6 text-xl leading-relaxed
                tracking-tighter">
                    {HERO_CONTENT}
                </p>
                <a href="/public/resume.pdf"
                target="_blank " rel="noopener noreferrer"
                download
                className="bg-white rounded-full p-4 text-sm
                text-stone-800 mb-10">Download Resume</a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
export default Hero
