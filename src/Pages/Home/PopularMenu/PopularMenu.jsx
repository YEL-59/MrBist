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
   </section>
   </>
  )
}

export default PopularMenu