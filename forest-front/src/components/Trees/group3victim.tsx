import React from 'react';

const Group3Victim = ({x = -1, y = -1, realX = -1, realY=-1, status="fucked up"}) => {
  const handleHover = () => {
    console.log('---------Group3 Victim tree hovered!---------');
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
          d="M 36.717 90 h 17.786 c -3.688 -3.683 -3.603 -9.403 -3.627 -15.108 l 0 0 c 0.223 -6.449 2.375 -13.838 3.337 -21.428 l -2.278 -0.206 c -0.421 3.709 -1.478 7.201 -2.758 10.155 c -1.933 -4.69 -3.368 -7.247 -3.516 -12.666 h -1.608 c -0.749 4.365 -0.278 8.941 1.608 13.76 c -2.931 -4.097 -6.019 -7.1 -9.292 -8.813 l -1.659 1.674 c 4.013 2.908 7.848 8.641 7.499 15.218 C 42.208 80.466 41.172 85.438 36.717 90 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(180,103,51)", // orange
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          stroke-linecap="round"
        />
        <path
          d="M 83.376 27.144 c 0 -3.078 -2.095 -5.66 -4.936 -6.415 c 0.003 -0.077 0.012 -0.153 0.012 -0.23 c 0 -3.67 -2.975 -6.646 -6.646 -6.646 c -0.605 0 -1.189 0.088 -1.746 0.24 c -0.25 -3.442 -3.115 -6.16 -6.621 -6.16 c -0.939 0 -1.831 0.197 -2.641 0.548 c -0.419 -3.267 -3.204 -5.795 -6.585 -5.795 c -1.575 0 -3.02 0.551 -4.159 1.466 C 48.972 1.712 46.546 0 43.704 0 c -2.863 0 -5.322 1.729 -6.392 4.199 c -0.189 -0.015 -0.379 -0.025 -0.571 -0.025 c -2.287 0 -4.316 1.102 -5.585 2.804 c -1.173 -0.9 -2.64 -1.436 -4.233 -1.436 c -3.846 0 -6.963 3.118 -6.963 6.963 c -3.846 0 -6.963 3.118 -6.963 6.963 c 0 0.849 0.152 1.662 0.431 2.414 c -3.718 0.476 -6.592 3.65 -6.592 7.497 c 0 2.284 1.014 4.33 2.615 5.716 c -0.843 1.219 -1.337 2.698 -1.337 4.292 c 0 0.86 0.146 1.686 0.411 2.457 c -1.18 1.334 -1.898 3.086 -1.898 5.007 c 0 4.176 3.385 7.561 7.561 7.561 c 1.692 0 3.254 -0.556 4.514 -1.495 c 0.826 3.28 3.795 5.708 7.331 5.708 c 1.967 0 3.758 -0.752 5.103 -1.983 c 1.231 1.966 3.415 3.274 5.905 3.274 c 3.846 0 6.963 -3.118 6.963 -6.963 c 0 -0.061 -0.003 -0.121 -0.005 -0.182 c 0.978 0.506 2.087 0.793 3.264 0.793 c 1.579 0 3.038 -0.515 4.219 -1.385 c 0.995 3.382 4.121 5.851 7.825 5.851 c 2.239 0 4.266 -0.902 5.741 -2.363 c 1.015 0.453 2.138 0.707 3.321 0.707 c 4.506 0 8.158 -3.652 8.158 -8.158 c 0 -1.258 -0.285 -2.449 -0.793 -3.512 c 3.278 -1.058 5.649 -4.133 5.649 -7.763 c 0 -1.52 -0.423 -2.938 -1.148 -4.157 C 82.117 31.611 83.376 29.527 83.376 27.144 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(227, 119, 25)", // light orange
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

export default Group3Victim;
