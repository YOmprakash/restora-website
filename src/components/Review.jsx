
import { REVIEW } from "../constants"
import xaviour from "../assets/xaviour.jpeg"
import customer1 from "../assets/customer1.jpeg"
import customer2 from "../assets/customer2.jpeg"
import customer3 from "../assets/customer3.jpeg"
import customer4 from "../assets/customer4.jpeg"
import { motion } from "framer-motion";

const containerVarients = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      ease: "easeInOut",
    },
  },
}

const itemVarients = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}
const Review = () => {
  return (
    <section className="container mx-auto mb-8 mt-12  " id="review">
    <motion.div
     initial="hidden"
     whileInView="show"
     viewport={{ once: true }}
     variants={containerVarients}

     className="flex flex-col justify-center items-center">
      <motion.p
      variants={itemVarients}

       className="text-3xl px-2 font-light leading-normal lg:mx-40 lg:text-[52px]">{REVIEW.content}</motion.p>
      <motion.div
      variants={itemVarients}
       className=" mt-10 flex  justify-center items-center">
        <img className="rounded-full w-12 f" src={xaviour} alt="xaviour" width={80} height={80} />
        <div className="ml-4">
          <h6>{REVIEW.name}</h6>
          <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
        </div>
      </motion.div>

    </motion.div>
    <motion.div
     initial="hidden"
     whileInView="show"
     viewport={{ once: true }}
     variants={itemVarients}
     className="flex flex-col gap-2 items-center justify-center flex-wrap mt-8 md:flex-row">
      {[customer1, customer2, customer3, customer4].map((image, index) => (
        <motion.img 
        variants={itemVarients}
        className='rounded-lg object-cover w-[200px] h-[300px] rounded-br-3xl rounded-tl-3xl' key={index} src={image} alt="xaviour"  />
      ))}
    </motion.div>

    </section>
  )
}

export default Review