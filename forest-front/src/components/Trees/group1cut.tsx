import React from 'react';

const Group1Cut = ({x = -1, y = -1, realX = -1, realY=-1, status="fucked up"}) => {
  const handleHover = () => {
    console.log('---------Group1 Cut tree hovered!---------');
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
        <rect
          x="41.04"
          y="63.09"
          rx="0"
          ry="0"
          width="7.91"
          height="26.91"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(122,8,8)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
        />
        <polygon
          points="44.04,69.09 48.96,69.09 48.96,63.09 41.04,63.09 41.04,90 44.04,90 "
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(96,7,7)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="  matrix(1 0 0 1 0 0) "
        />
        <path
          d="M 61.355 67.042 H 28.646 c -9.191 0 -16.668 -7.477 -16.668 -16.667 c 0 -4.903 2.124 -9.446 5.723 -12.567 c -0.749 -1.913 -1.135 -3.955 -1.135 -6.045 c 0 -7.046 4.33 -13.133 10.68 -15.55 C 28.064 7.137 35.714 0 45 0 c 9.285 0 16.936 7.137 17.755 16.213 c 6.349 2.417 10.679 8.505 10.679 15.55 c 0 2.09 -0.386 4.131 -1.135 6.045 c 3.599 3.121 5.723 7.664 5.723 12.567 C 78.022 59.566 70.546 67.042 61.355 67.042 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(255, 13, 13)", //red lighter
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          stroke-linecap="round"
        />
        <path
          d="M 41.086 65.042 c -9.985 0 -18.108 -7.253 -18.108 -16.17 c 0 -4.757 2.307 -9.164 6.218 -12.192 c -0.813 -1.856 -1.233 -3.837 -1.233 -5.864 c 0 -6.836 4.704 -12.741 11.602 -15.086 C 40.228 9.164 45.02 3.648 51.595 1.265 C 49.554 0.45 47.329 0 45 0 c -9.286 0 -16.936 7.137 -17.755 16.213 c -6.35 2.417 -10.68 8.505 -10.68 15.55 c 0 2.09 0.387 4.131 1.135 6.045 c -3.599 3.121 -5.723 7.664 -5.723 12.567 c 0 9.191 7.477 16.667 16.668 16.667 h 32.709 c 2.86 0 5.554 -0.725 7.908 -2 H 41.086 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(255, 0, 0)", // red darker
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

export default Group1Cut;
