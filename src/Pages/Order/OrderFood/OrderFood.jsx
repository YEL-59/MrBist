import { useState } from "react";
import ordercover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMemo from "../../../hooks/useMemo";

import OrderTab from "../OrderTab/OrderTab";

const OrderFood = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMemo();
 
  const deserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drikns = menu.filter((item) => item.category === "drinks");
  return (
    <>
      <Cover img={ordercover} title={"Order Food"} />
      <Tabs defaultIndex={tabIndex} onSelect={(e)=>setTabIndex(e)}>
    <TabList>
      <Tab>salad</Tab>
      <Tab>pizza</Tab>
      <Tab>soup</Tab>
      <Tab>dessert</Tab>
      <Tab>drinks</Tab>
      
    </TabList>

    <TabPanel>
 <OrderTab items={salad}/>
    </TabPanel>
    <TabPanel>
    <OrderTab items={pizza}/>
    </TabPanel>
    <TabPanel>
    <OrderTab items={soup}/>
    </TabPanel>
    <TabPanel>
    <OrderTab items={deserts}/>
    </TabPanel>
    <TabPanel>
    <OrderTab items={drikns}/>
    </TabPanel>
  </Tabs>
    </>
  );
};

export default OrderFood;
