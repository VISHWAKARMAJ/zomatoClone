import "./delivery.css";
import { useState, useEffect } from "react";
import NextArrow from "../comman/carouse/nextArrow";
import PrevArrow from "../comman/carouse/prevArrow";
import Slider from "react-slick";
import DeliveryItem from "./deliveryItem";

// const delivaryItem=

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const DeliveryCollection = () => {
  const [input, setInput] = useState([]);
  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInput(data.meals));
  }, []);
  return (
    <div
      className="
    delivary-collection "
    >
      <div className="max-width">
        <div className="collectin-title">Eat what makes you happy</div>
        <Slider {...settings}>
          {input.map((item) => {
            return <DeliveryItem item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollection;
