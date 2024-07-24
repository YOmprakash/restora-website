
import mission from "../assets/mission.mp4"
import missionImg from "../assets/mission.jpeg"
import {MISSION} from "../constants"

const Mission = () => {
  return (
    <section className="container mx-auto mb-8 text-center">
        <h2 className="text-3xl text-white mb-8">Our Mission</h2>
        <div className=" flex items-center justify-center relative">
            <video src={mission} autoPlay loop muted  playsInline poster={missionImg} className="w-full rounded-3xl" />
            <div className="absolute bg-black/40 h-full w-full rounded-3xl"></div>
            <p className="absolute max-w-lg lg:text-3xl">{MISSION}</p>
            
        </div>
    </section>
  )
}

export default Mission