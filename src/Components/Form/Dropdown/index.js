import React from "react";
import PropTypes from "prop-types";

import styles from "./dropdown.module.css";

const Dropdown = ({ options, handleChange, name }) => {
  return (
    <div className={styles.dropdown}>
      <label className={styles.dropdownLabel} htmlFor={name}>
        Please select a {name}
      </label>
      <select
        onChange={handleChange}
        id={name}
        name={name}
        className={styles.dropdownSelect}
      >
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
