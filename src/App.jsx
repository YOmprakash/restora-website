import Dishes from "./components/Dishes";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

import About from "./components/About";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";

export default function App() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Navbar />
      <HeroSection />
      <Dishes />
      <About />
      <Mission />
      <Expertise/>
    </main>
  );
}
