import React from "react";
import PropTypes from "prop-types";
import styles from "./checkbox.module.css";

const Checkbox = ({ name, handleChange, isChecked }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        id={name}
        name={name}
        value={name}
        onChange={handleChange}
        checked={isChecked}
        className={styles.checkbox}
      />
      <label htmlFor={name}> {name} Indicator </label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default Checkbox;
