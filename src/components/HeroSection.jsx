import video from "../assets/hero.mp4";
import logo from "../assets/logo.png";
import hero from "../assets/hero.jpeg";
const HeroSection = () => {
  return (
    <section className="relative h-screen flex justify-center items-center">
      <div className=" absolute overflow-hidden h-full w-full -z-10 inset-0">
        <video
          src={video}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={hero}
        />
      </div>
      <div className="absolute  inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <div className="relative z-20 ">
        <img src={logo} alt="logo" className="w-full p-4" />
        <p className="text-white text-lg">Paris</p>
      </div>
    </section>
  );
};

export default HeroSection;
