import { ABOUT } from "../constants"
import about from "../assets/about.jpeg"
const About = () => {
  return (
    <section className=" container mb-8 text-white mx-auto">
    <h2 className="text-3xl text-white text-center mb-10">About Us</h2>
    <div className="flex flex-wrap">
      <img src={about} alt="about" className="rounded-3xl p-4 lg:w-1/2"/>
      <div className="w-full px-2  lg:w-1/2">
        <h2 className="text-4xl lg:text-6xl">{ABOUT.header}</h2>
        <div className="h-2 mb-8 mt-1 w-36 bg-rose-300 lg:-rotate-3"></div>
        <p className="m-8 text-2xl leading-relaxed lg:max-w-xl">{ABOUT.content}</p>
      </div>
    </div>
    </section>
  )
}

export default About