


const DishCard = ({image, title, description}) => {
  return (
    <div>
        <img src={image} alt={title}  className="rounded-3xl"/>
        <div className="p-4">
         <h3 className="font-bold font-3xl mb-2 tracking-tighter">{title}</h3>
        <p className="text-sm">{description}</p>
        </div>
       
    </div>
  )
}

export default DishCard