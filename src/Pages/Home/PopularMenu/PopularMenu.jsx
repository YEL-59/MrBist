import { useEffect, useState } from "react"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"


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

    <div>
      {
        menu.map(item => (
          <div key={item.id} className="md:w-4/12 mx-auto mb-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl text-black uppercase">{item.name}</h3>
                <p className="text-yellow-600 text-lg">${item.price}</p>
              </div>
              <div>
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))
      }
    </div>
   </section>
   </>
  )
}

export default PopularMenu