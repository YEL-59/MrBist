import { useState } from "react";
import ordercover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMemo from "../../../hooks/useMemo";

import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const OrderFood = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
  const { category } = useParams();
  console.log(category);
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMemo();

  const deserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drikns = menu.filter((item) => item.category === "drinks");
  return (
    <>
      <Helmet>
          <title>Mr.Bistro | Order Food</title>
        </Helmet>
      <Cover img={ordercover} title={"Order Food"} />
      <Tabs defaultIndex={tabIndex} onSelect={(tabIndex) => setTabIndex(tabIndex)}>
        <TabList>
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soup</Tab>
          <Tab>dessert</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={deserts} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drikns} />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default OrderFood;
