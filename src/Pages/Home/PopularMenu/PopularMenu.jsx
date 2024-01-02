import { useEffect, useState } from "react"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import MenuItem from "../../Shared/MenuItem/MenuItem"


const PopularMenu = () => {
  const [menu,setMenu]=useState([])
  useEffect(() => {
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {
      const PopularItems = data.filter(item => item.category === 'popular');
      setMenu(PopularItems)});
  }, [])
  return (
   <>
   <section>
    <SectionTitle heading={"From Our Menu"} subheading={"Items"}/>

    <div className="grid md:grid-cols-2 gap-4 ">
      {
        menu.map(item => (
          <MenuItem key={item.id} item={item}/>
        ))
      }
    </div>
    <button className="btn btn-outline  mt-4 border-0 border-b-2">View Full Menu</button>
   </section>
   </>
  )
}

export default PopularMenu