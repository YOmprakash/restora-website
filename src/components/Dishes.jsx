
import DishCard from "./DishCard";
import {DISHES} from '../constants'
const Dishes = () => {
  return (
    <section  className="container mx-auto py-16" id="dishes">
        <h2 className="text-3xl text-white text-center pb-10 lg:text-4xl">Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
        {DISHES.map((dish,index) => 
        <DishCard key={index} image={dish.image} title={dish.title} description={dish.description}/>
        )}
        </div>
    </section>
  )
}

export default Dishes