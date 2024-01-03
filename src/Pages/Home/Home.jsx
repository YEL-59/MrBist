import Banner from "./Banner/Banner"
import Category from "./Category/Category"
import Featured from "./Featured/Featured"
import PopularMenu from "./PopularMenu/PopularMenu"
import Reviews from "./Reviews/Reviews"
// import Newyear from "./Newyear/Newyear"
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
    {/* <Newyear/> */}
    <Helmet>
          <title>Mr.Bistro home</title>
         
        </Helmet>
    <Banner/>
    <Category/>
    <PopularMenu/>
    <Featured/>
    <Reviews/>
    </>
  )
}

export default Home