import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuimg from '../../assets/menu/banner3.jpg'
import PopularMenu from "../Home/PopularMenu/PopularMenu"
const Menu = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>Mr.Bistro menu</title>
         
        </Helmet>
       
        <Cover img={menuimg} title={'our menu'}/>
        <PopularMenu/>
      </div>
    </>
  );
};

export default Menu;
