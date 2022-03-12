import Slider from "react-slick";
import "./collection.css";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <nextArrow />,
  prevArrow: <prevArrow />
};
const Collection = ({ List }) => {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collection</div>
        <div className="colletion-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </div>
          <div className="colletion-location">
            <div>All collections in Delhi NCR</div>
            <i class="fa-regular fa-caret-right absolute-center"></i>
          </div>
        </div>

        <Slider {...settings}>
          {List.map((item) => {
            return (
              <div>
                <div className="collection-cover">
                  <img
                    className="collection-image"
                    src={item.cover}
                    alt={item.title}
                  />
                  <div className="gradient-bg"></div>
                  <div className="collection-card-title"> {item.title}</div>
                  <div className="colletion-card-subtitle">
                    <div>{item.places}</div>
                    <i class="fa-regular fa-caret-right absolute-center"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Collection;
