import FoodCart from "../../../Components/FoodCart/FoodCart"


const OrderTab = ({items}) => {
  return (
   <>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">  {items.map((item) => (
            <FoodCart key={item.id} item={item} />
          ))}</div></>
  )
}

export default OrderTab