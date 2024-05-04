import React from 'react';

const Group6Victim = ({x = -1, y = -1, realX = -1, realY=-1, status="fucked up"}) => {
  const handleHover = () => {
    console.log('---------Group6 Victim tree hovered!---------');
    console.log("x: ", x);
    console.log("y: ", y);
    console.log("realX: ", realX);
    console.log("realY: ", realY);
    console.log("status: ", status);
    console.log("------------------");
    // Add any other logic you'd like to perform on hover
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      xmlSpace="preserve"
      onMouseEnter={handleHover} // Add this line
    >
      <g
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M46.973 60.855 L46.973 60.855 l-3.946 0 v0 h-2 V89 c0 0.553 0.448 1 1 1 h5.946 c0.553 0 1-0.447 1-1 V60.855 H46.973 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(160,126,99)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
        <path
          d="M74.837 60.42 L45.9 0.565 C45.733 0.219 45.384 0 45 0 s-0.733 0.219-0.9 0.565 L15.163 60.42 c-0.15 0.311-0.13 0.676 0.053 0.967 c0.183 0.292 0.503 0.469 0.847 0.469 h57.874 c0.344 0 0.664-0.177 0.847-0.469 C74.967 61.096 74.986 60.73 74.837 60.42 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(240, 123, 14)", // light orange
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
        <path
          d="M44.8 0.028 C44.499 0.09 44.237 0.281 44.1 0.565 L15.163 60.42 c-0.15 0.311-0.13 0.676 0.053 0.967 c0.183 0.292 0.503 0.469 0.847 0.469 h17.218 L44.8 0.028 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(217, 105, 0)", // darker orange
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default Group6Victim;
