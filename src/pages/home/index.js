import React, { useState } from "react";
import Delivary from "../../../component/Delivary";
import Dining from "../../../component/Dining";
import Footer from "../../../component/footer";
import Header from "../../../component/Header";
import NigthLight from "../../../component/nightLight";
import TagOption from "../../../component/tagOption";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivary");
  return (
    <div>
      <Header />
      <TagOption active={activeTab} setActive={setActiveTab} />
      {/* {getCorrectScreen(activeTab)} */}
      {/* <Footer /> */}
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivary":
      return <Delivary />;
    case "Dining Out":
      return <Dining />;
    case "Nightlife":
      return <NigthLight />;
    default:
      return <NigthLight />;
  }
};
export default HomePage;
