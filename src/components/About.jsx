import { ABOUT } from "../constants"
import about from "../assets/about.jpeg"
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className=" container mb-8 text-white mx-auto">
    <h2 className="text-3xl text-white text-center mb-10">About Us</h2>
    <div className="flex flex-wrap">
      <img
      
       
       src={about} alt="about" className="rounded-3xl p-4 lg:w-1/2"/>
      <div className="w-full px-2  lg:w-1/2">
        <motion.h2
         initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6, delay: 0.3 }}
         className="text-4xl lg:text-6xl">{ABOUT.header}</motion.h2>
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6, delay: 0.4 }}

        className="h-2 mb-8 mt-1 w-36 bg-rose-300 lg:-rotate-3"></motion.div>
        <motion.p
         initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6, delay: 0.6 }}
         className="m-8 text-2xl leading-relaxed lg:max-w-xl">{ABOUT.content}</motion.p>
      </div>
    </div>
    </section>
  )
}

export default About