
import {CUSINES} from "../constants";
const Expertise = () => {
  return (
    <section className="mb-8">
    <h2 className="my-4 text-white text-center text-3xl lg:text-4xl">Our Expertise</h2>
    <div className="container mx-auto px-4">
    {CUSINES.map((cuisine, index) => (
      <div key={index} className="flex items-center border-dotted border-b-4 border-neutral-700/40 py-2">
      <div className="pr-8">{cuisine.number}</div>
      <div className="w-1/3 flex-shrink-0">
        <img src={cuisine.image} alt={cuisine.title} className="h-auto rounded-3xl"/>
      </div>
      <div className="pl-4">
        <h3 className="text-2xl uppercase text-rose-300">{cuisine.title}</h3>
        <p className="text-lg mt-4">{cuisine.description}</p>
      </div>

      </div>
       
    ))}
    </div>
    </section>
  )
}

export default Expertise