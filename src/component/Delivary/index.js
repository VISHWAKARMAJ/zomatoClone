import React from "react";
import { restaurent } from "../../data/restorent";
import ExploreSection from "./comman/exploreSection";
import Filter from "./comman/filter";
import DeliveryCollection from "./deliveryCollection";
import TopBrand from "./deliveryCollection/TopBrand";
// import './Delivary.css';

const deliveryItem = [
  {
    id: 1,
    icon: <i className="fa-solid fa-arrow-down-1-9 absolute-center"></i>,
    title: "filter"
  },
  {
    id: 2,
    title: "Rating:4.0+"
  },
  {
    id: 3,
    title: "Safe and Hygienic"
  },
  {
    id: 4,
    title: "Pure Veg"
  },
  {
    id: 5,
    icon: <i class="fa-solid fa-up-down"></i>,
    title: "Delivery Time"
  },
  {
    id: 6,
    title: "Great Offers"
  }
];

const restaurentList = restaurent;

const Delivary = () => {
  return (
    <div>
      <div className="max-width">
        <Filter filterList={deliveryItem} />
      </div>
      <DeliveryCollection />
      <TopBrand />
      <ExploreSection
        List={restaurentList}
        collectionname="Delivery Restaurent in Lucknow"
      />
    </div>
  );
};

export default Delivary;
