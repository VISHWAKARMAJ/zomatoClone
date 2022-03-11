import React from "react";
import Collection from "../Delivary/comman/collection";
import "./Dining.css";

const collectionList = [
  {
    id: "1",
    title: "Live Sport Screenings",
    places: "12 places",
    cover:
      "https://b.zmtcdn.com/data/collections/01c4e61b30650bc816b5f627aefa0464_1646986437.jpg"
  },
  {
    id: "2",
    title: "Newly Opened",
    places: "12 places",
    cover:
      "https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040101.png"
  },
  {
    id: "3",
    title: "Veggle Friendly",
    places: "23 places",
    cover:
      "https://b.zmtcdn.com/data/collections/dc55234ebcab4867fa2eb65730c4a695_1646987030.jpg"
  },
  {
    id: "4",
    title: "Trending This week",
    places: "23 places",
    cover:
      "https://b.zmtcdn.com/data/collections/821a4a7a6a0f8c265f5bf804cf18dfa3_1631714127.jpg"
  },
  {
    id: "5",
    title: "Best of Bangalurr",
    places: "116 places",
    cover:
      "	https://b.zmtcdn.com/data/collections/f29fa95355a78edb148d737d12bd9ef0_1646983582.jpg"
  },
  {
    id: "6",
    title: "Outdoor Seating",
    places: "24 places",
    cover:
      "https://b.zmtcdn.com/data/collections/460a438bf1ccf7a0e032928f6fef0d75_1646984077.jpg"
  },
  {
    id: "7",
    title: "Brilliant Biryanis",
    places: "16 places",
    cover:
      "https://b.zmtcdn.com/data/collections/2683237a53944cfd9801c2fabd5cdf32_1582082375.jpg"
  },
  {
    id: "8",
    title: "Best Pizza Piaces In Town",
    places: "22 places",
    cover:
      "https://b.zmtcdn.com/data/collections/534d15b97ec6a18a13d41d92f7a3c4f4_1631615781.jpg"
  }
];

const diningFilter = [
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

const Dining = () => {
  return (
    <div>
      <Collection List={collectionList} />{" "}
    </div>
  );
};

export default Dining;
