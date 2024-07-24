
import { REVIEW } from "../constants"
import xaviour from "../assets/xaviour.jpeg"
import customer1 from "../assets/customer1.jpeg"
import customer2 from "../assets/customer2.jpeg"
import customer3 from "../assets/customer3.jpeg"
import customer4 from "../assets/customer4.jpeg"

const Review = () => {
  return (
    <section className="container mx-auto mb-8 mt-12  ">
    <div className="flex flex-col justify-center items-center">
      <p className="text-3xl px-2 font-light leading-normal lg:mx-40 lg:text-[52px]">{REVIEW.content}</p>
      <div className=" mt-10 flex  justify-center items-center">
        <img className="rounded-full w-12 f" src={xaviour} alt="xaviour" width={80} height={80} />
        <div className="ml-4">
          <h6>{REVIEW.name}</h6>
          <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
        </div>
      </div>

    </div>
    <div className="flex flex-col gap-2 items-center justify-center flex-wrap mt-8 md:flex-row">
      {[customer1, customer2, customer3, customer4].map((image, index) => (
        <img className='rounded-lg object-cover w-[200px] h-[300px] rounded-br-3xl rounded-tl-3xl' key={index} src={image} alt="xaviour"  />
      ))}
    </div>

    </section>
  )
}

export default Review