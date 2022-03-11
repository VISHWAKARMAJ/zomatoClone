import "./deliveryItem.css";

const DeliveryItem = ({ item }) => {
  return (
    <div className="max-width">
      <div className="delivery-item-cover ">
        <img
          className="delivery-item-image max-width"
          src={item.strMealThumb}
          alt={item.titel}
        />
      </div>
      <div className="delivery-title">{item.strMeal}</div>
    </div>
  );
};
export default DeliveryItem;
