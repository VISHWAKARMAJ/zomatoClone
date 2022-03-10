import React from "react";
import "./tag.css";

const tabs = [
  {
    id: 1,
    name: "Delivary",
    active_img:
      "https://i.pinimg.com/564x/8d/a2/e3/8da2e350dc3a8e7788ff449445e4ce0c.jpg",
    backdrop: "FCEEC0",
    Inactive_img:
      "https://i.pinimg.com/564x/1b/03/54/1b0354e4bafa55cb2cbbac1027c23e1b.jpg"
  },
  {
    id: 2,
    name: "Dining",
    active_img:
      "https://i.pinimg.com/564x/b0/48/97/b048978c54e0d715ff6752ce96f18611.jpg",
    backdrop: "#E5F3F3",
    Inactive_img:
      "https://i.pinimg.com/564x/55/f8/af/55f8afd0d4c2224653f1ba467b6543e8.jpg"
  },
  {
    id: 3,
    name: "NigthLight",
    active_img:
      "  https://i.pinimg.com/564x/bf/42/b2/bf42b21842744cd28935cef4cb57a6de.jpg",
    backdrop: "#EDF4FF",
    Inactive_img:
      "https://i.pinimg.com/564x/0e/a6/65/0ea66518bde8205193d2b02a753f0057.jpg"
  }
];

const TagOption = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-option">
      {/* <button onClick={() => setActiveTab("NigthLight")}> click</button> */}
      <div className="options-wrapper  max-width ">
        {tabs.map((tab) => {
          return (
            <div
              onClick={() => setActiveTab(tab.name)}
              className={`tab-item absolute-center cur-po ${
                activeTab === tab.name && "active-tab"
              }`}
            >
              <div
                className="tab-image-container absolute-center"
                style={{
                  backgroundColor: `${
                    activeTab === tab.name ? tab.backdrop : ""
                  }`
                }}
              >
                <img
                  height="50px"
                  width="50px"
                  className="tab-image"
                  alt={tab.name}
                  src={
                    activeTab === tab.name ? tab.active_img : tab.Inactive_img
                  }
                />
              </div>
              <div className="tab-name">{tab.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TagOption;
