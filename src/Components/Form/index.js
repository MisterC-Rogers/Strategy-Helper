import React, { useState } from "react";
import {
  currencyPairs,
  candlestickPatterns,
  indicators,
} from "../../Data/FormData";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";

import styles from "./form.module.css";

const FormComponent = () => {
  const [indicator, setIndicator] = useState(indicators);
  const [dropdownValue, setDropdownValue] = useState({});

  const handleIndicatorChange = ({ target }) =>
    setIndicator((s) => ({ ...s, [target.name]: !s[target.name] }));

  const handleDropdownChange = ({ target }) => {
    setDropdownValue({ ...dropdownValue, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(indicator);
    console.log(dropdownValue);
    setIndicator(indicators);
    setDropdownValue({});
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.dropdownContainer}>
        <Dropdown
          name="Currency Pair"
          options={currencyPairs}
          handleChange={handleDropdownChange}
        />
        <Dropdown
          name="Candlestick Pattern"
          options={candlestickPatterns}
          handleChange={handleDropdownChange}
        />
      </div>
      {Object.keys(indicator).map((item) => {
        return (
          <Checkbox
            key={item}
            name={item}
            handleChange={handleIndicatorChange}
            isChecked={indicator[item]}
          />
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
