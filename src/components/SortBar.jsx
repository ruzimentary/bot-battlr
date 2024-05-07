import React from "react";

const SortBar = ({ onSortChange }) => {
  const handleSortChange = (e) => {
    const sortOption = e.target.value;
    onSortChange(sortOption);
  };

  return (
    <div>
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default SortBar;
