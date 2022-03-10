import { React } from "react";
import FilterItem from "../filterItem";
import "./filter.css";

const Filter = ({ filterList }) => {
  return (
    <div className="filter">
      {filterList &&
        filterList.map((filter) => {
          return <FilterItem filter={filter} key={filter.id} />;
        })}
    </div>
  );
};

export default Filter;
