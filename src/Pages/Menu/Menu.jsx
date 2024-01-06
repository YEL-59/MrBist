import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuimg from "../../assets/menu/banner3.jpg";
import dessertimg from "../../assets/menu/dessert-bg.jpeg";
import pizzaimg from "../../assets/menu/pizza-bg.jpg";
import saladimg from "../../assets/menu/salad-bg.jpg";
import soupimg from "../../assets/menu/soup-bg.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMemo from "../../hooks/useMemo";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMemo();
  const deserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <div>
        <Helmet>
          <title>Mr.Bistro menu</title>
        </Helmet>

        <Cover img={menuimg} title={"our menu"} />
        <SectionTitle
          subheading={"Dont miss"}
          heading={"Todays offers"}
        ></SectionTitle>
        <MenuCategory items={offered} />
        {/* desert */}
        <MenuCategory items={deserts} title={"deserts"} img={dessertimg} />
         {/* pizza */}
        <MenuCategory items={pizza} title={"pizza"} img={pizzaimg} />
         {/* salad */}
        <MenuCategory items={salad} title={"salad"} img={saladimg} />
         {/* soup */}
        <MenuCategory items={soup} title={"soup"} img={soupimg} />
      </div>
    </>
  );
};

export default Menu;
