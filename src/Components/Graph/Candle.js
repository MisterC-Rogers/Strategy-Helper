import React from "react";

const Candle = ({ candle, index, width, scaleY, scaleBody }) => {
  const { close, open, high, low } = candle;
  const fill = close > open ? "#4AFA9A" : "#E33F64";
  const x = index * width;
  const max = Math.max(open, close);
  const min = Math.min(open, close);
  return (
    <>
      <line
        x1={x + width / 2}
        y1={scaleY(low)}
        x2={x + width / 2}
        y2={scaleY(high)}
        stroke={fill}
        strokeWidth={1}
      />
      <rect
        x={x + 2}
        y={scaleY(max)}
        width={width - 2 * 2}
        height={scaleBody(max - min)}
        {...{ fill }}
      />
    </>
  );
};

export default Candle;
