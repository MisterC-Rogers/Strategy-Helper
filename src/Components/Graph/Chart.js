import React, { useState } from "react";
import Candle from "./Candle";
import data from "../../Data/candleData.json";
import { scaleLinear } from "d3";
import styles from "./graph.module.css";

const Chart = () => {
  const [candles] = useState(data.slice(0, 31));
  const size = 500;
  const width = size / candles.length;
  const getDomain = (rows) => {
    const values = rows.map(({ high, low }) => [high, low]).flat();
    return [Math.min(...values), Math.max(...values)];
  };
  const domain = getDomain(candles);
  const scaleY = scaleLinear().domain(domain).range([size, 0]);
  const scaleBody = scaleLinear()
    .domain([0, Math.max(...domain) - Math.min(...domain)])
    .range([0, size]);

  return (
    <div className={styles.chartContainer}>
      <svg className={styles.SVG}>
        {candles.map((candle, index) => (
          <Candle
            key={candle.date}
            {...{ candle, index, width, scaleY, scaleBody }}
          />
        ))}
      </svg>
    </div>
  );
};

export default Chart;
