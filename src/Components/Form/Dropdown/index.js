import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ options, handleChange, name }) => {
  return (
    <div>
      <label htmlFor={name}>Please select a {name}</label>
      <select onChange={handleChange} id={name} name={name}>
        {options.map((item, index) => {
          return (
            <option key={item} value={item} selected={index === 0}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default Dropdown;
