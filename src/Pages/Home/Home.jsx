import Banner from "./Banner/Banner"
import Category from "./Category/Category"
import Featured from "./Featured/Featured"
import PopularMenu from "./PopularMenu/PopularMenu"
import Reviews from "./Reviews/Reviews"
// import Newyear from "./Newyear/Newyear"


const Home = () => {
  return (
    <>
    {/* <Newyear/> */}
    <Banner/>
    <Category/>
    <PopularMenu/>
    <Featured/>
    <Reviews/>
    </>
  )
}

export default Home