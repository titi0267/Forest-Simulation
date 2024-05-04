import React from 'react';

const Group4 = ({x = -1, y = -1, realX = -1, realY=-1, status="fucked up"}) => {
  const handleHover = () => {
    console.log('---------Group4 tree hovered!---------');
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
      <defs></defs>
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
          d="M 78.771 68.941 L 59.992 33.5 h 5.392 c 0.554 0 1.063 -0.305 1.323 -0.793 s 0.231 -1.08 -0.076 -1.541 l -20.384 -30.5 c -0.557 -0.833 -1.938 -0.833 -2.494 0 l -20.384 30.5 c -0.308 0.46 -0.337 1.052 -0.076 1.541 c 0.261 0.488 0.769 0.793 1.323 0.793 h 5.391 L 11.229 68.941 c -0.247 0.465 -0.231 1.024 0.04 1.476 s 0.759 0.727 1.285 0.727 h 64.891 c 0.526 0 1.014 -0.275 1.285 -0.727 S 79.018 69.406 78.771 68.941 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(28,165,111)", // light light green
            // fill: "rgb(227, 134, 20)", // light light orange
            // fill: "rgb(230, 50, 18)", // light light red
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          stroke-linecap="round"
        />
        <path
          d="M 45 90 c -0.829 0 -1.5 -0.672 -1.5 -1.5 V 32.633 c 0 -0.829 0.671 -1.5 1.5 -1.5 s 1.5 0.671 1.5 1.5 V 88.5 C 46.5 89.328 45.829 90 45 90 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(23,139,93)", // light light darker green
            // fill: "rgb(224, 125, 2)", // light light darker orange
            // fill: "rgb(232, 37, 2)", // light light darker red
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          stroke-linecap="round"
        />
        <path
          d="M 45 56.186 c -0.384 0 -0.768 -0.146 -1.061 -0.439 c -0.586 -0.586 -0.586 -1.535 0 -2.121 l 6.272 -6.272 c 0.586 -0.586 1.535 -0.586 2.121 0 s 0.586 1.535 0 2.121 l -6.272 6.272 C 45.768 56.039 45.384 56.186 45 56.186 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(23,139,93)", // light light darker green
            // fill: "rgb(224, 125, 2)", // light light darker orange
            // fill: "rgb(232, 37, 2)", // light light darker red
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          stroke-linecap="round"
        />
        <path
          d="M 45 48.998 c -0.384 0 -0.768 -0.146 -1.061 -0.439 l -6.273 -6.273 c -0.586 -0.585 -0.586 -1.536 0 -2.121 c 0.586 -0.586 1.535 -0.586 2.121 0 l 6.273 6.273 c 0.586 0.586 0.586 1.535 0 2.121 C 45.768 48.852 45.384 48.998 45 48.998 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(23,139,93)", // light light darker green
            // fill: "rgb(224, 125, 2)", // light light darker orange
            // fill: "rgb(232, 37, 2)", // light light darker red
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          stroke-linecap="round"
        />
      </g>
    </svg>
  );
};

export default Group4;
