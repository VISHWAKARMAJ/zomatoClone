import { restaurent } from "../../../../../src/data/restorent";
import "./Card.css";

const ExploreCard = ({ restaurent }) => {
  const name = restaurent?.info?.name ?? "";
  const coverImg = restaurent?.info?.image?.url;
  const deliveryTime = restaurent?.order?.deliveryTime;
  const rating = restaurent?.info?.rating?.rating_text;
  const approxPrice = restaurent?.info?.cfo?.text;
  const offers = restaurent?.bulkOffers ?? [];
  // cosnt cuisines= restaurent?.info?.cuisine?.;
  const cuisines = restaurent?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainer = restaurent?.bottomContainers;
  const goldOff = restaurent?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return (
    <div className="explore-card cur-po">
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-img" />
        <div className="delivery-time">{deliveryTime}</div>
        {proOff && <div className="pro-off">{proOff}</div>}
        {goldOff && <div className="gold-off abolute-center">{goldOff}</div>}
        {discount && <div className="discount abolute-center">{discount}</div>}
      </div>
    </div>
  );
};
export default ExploreCard;
