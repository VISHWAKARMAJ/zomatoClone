import { restaurent } from "../../../../src/data/restorent";
import "./explore.css";
import ExploreCard from "./exploreCard";

const ExploreSection = ({ List, collectionname }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionname}</div>
      <div className="explore-grid">
        {List.map((restaurent) => {
          return <ExploreCard restaurent={restaurent} />;
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
