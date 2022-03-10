import { React } from "react";
import "./filter.css";

const Filter = ({ filter }) => {
  return (
    <div className="filterItem">
      <div className="filter-name">{filter.name}</div>
    </div>
  );
};

export default Filter;
