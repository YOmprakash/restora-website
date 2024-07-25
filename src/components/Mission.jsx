
import mission from "../assets/mission.mp4"
import missionImg from "../assets/mission.jpeg"
import {MISSION} from "../constants"
import { motion } from "framer-motion";
const Mission = () => {
  return (
    <section className="container mx-auto mb-8 text-center" id="mission">
        <h2 className="text-3xl text-white mb-8">Our Mission</h2>
        <div className=" flex items-center justify-center relative">
            <motion.video 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src={mission} autoPlay loop muted  playsInline poster={missionImg} className="w-full rounded-3xl"> </motion.video>
            <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className="absolute bg-black/40 h-full w-full rounded-3xl"></motion.div>
            <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.5 }}
             className="absolute max-w-lg lg:text-3xl">{MISSION}</motion.p>
            
        </div>
    </section>
  )
}

export default Mission