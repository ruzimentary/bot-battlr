import React from 'react';
import PropTypes from 'prop-types';

const BOT_CLASSES = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

const SortBar = ({ onSortChange, onClassFilterChange }) => {
  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    onClassFilterChange(event.target.name, event.target.checked);
  };

  return (
    <div className="sort-bar">
      <h3>Sort Bots By:</h3>
      <select onChange={handleSortChange}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>

      <h3>Filter By Class:</h3>
      <div className="sort-bar-filters">
        {BOT_CLASSES.map((className) => (
          <label key={className}>
            <input type="checkbox" name={className} onChange={handleCheckboxChange} />
            {className}
          </label>
        ))}
      </div>
    </div>
  );
};

SortBar.propTypes = {
  onSortChange: PropTypes.func.isRequired,
  onClassFilterChange: PropTypes.func.isRequired
};

export default SortBar;
