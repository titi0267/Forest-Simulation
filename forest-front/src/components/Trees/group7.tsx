import React from 'react';

const Group7 = ({x = -1, y = -1, realX = -1, realY=-1, status="fucked up"}) => {
  const handleHover = () => {
    console.log('---------Group7 tree hovered!---------');
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
          d="M85.211 47.425 c 0.3 -0.873 0.465 -1.809 0.465 -2.785 c 0 -1.807 -0.561 -3.482 -1.516 -4.864 c 1.814 -1.571 2.964 -3.89 2.964 -6.478 c 0 -4.36 -3.258 -7.957 -7.471 -8.496 c 0.315 -0.853 0.488 -1.774 0.488 -2.736 c 0 -4.358 -3.533 -7.892 -7.892 -7.892 c 0 -4.358 -3.533 -7.892 -7.892 -7.892 c -1.805 0 -3.468 0.608 -4.798 1.628 c -1.439 -1.929 -3.738 -3.178 -6.33 -3.178 c -0.218 0 -0.434 0.011 -0.648 0.029 C51.37 1.959 48.583 0 45.338 0 c -3.399 0 -6.296 2.149 -7.407 5.163 c -0.606 -0.149 -1.239 -0.23 -1.891 -0.23 c -3.997 0 -7.297 2.971 -7.818 6.825 c -0.246 -0.023 -0.496 -0.036 -0.748 -0.036 c -4.288 0 -7.775 3.421 -7.886 7.683 c -0.458 -0.083 -0.929 -0.128 -1.411 -0.128 c -4.358 0 -7.892 3.533 -7.892 7.892 c 0 2.127 0.843 4.055 2.21 5.474 c -0.202 -0.013 -0.406 -0.022 -0.611 -0.022 c -5.106 0 -9.246 4.139 -9.246 9.246 c 0 4.114 2.688 7.599 6.403 8.798 c -0.576 1.206 -0.899 2.555 -0.899 3.981 c 0 5.106 4.139 9.246 9.246 9.246 c 1.341 0 2.613 -0.288 3.763 -0.801 c 1.671 1.655 3.969 2.678 6.506 2.678 c 4.198 0 7.74 -2.799 8.868 -6.632 c 1.338 0.986 2.991 1.57 4.781 1.57 c 1.334 0 2.591 -0.326 3.699 -0.899 c -0.002 0.069 -0.005 0.137 -0.005 0.206 c 0 4.358 3.533 7.892 7.892 7.892 c 2.822 0 5.297 -1.483 6.692 -3.711 c 1.524 1.395 3.554 2.247 5.784 2.247 c 4.008 0 7.372 -2.752 8.309 -6.469 c 1.428 1.064 3.198 1.694 5.116 1.694 c 4.732 0 8.569 -3.836 8.569 -8.569 C87.361 50.922 86.548 48.936 85.211 47.425 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(104,143,44)", // green 
            // fill: "rgb(245, 91, 20)", // orange 
            // fill: "rgb(247, 22, 10)", // red 
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
        <path
          d="M62.429 55.079 c -3.442 2.75 -7.5 4.261 -10.288 4.743 l -0.354 3.539 c 3.682 -1.565 7.559 -3.932 11.632 -7.099 L62.429 55.079 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(105,64,49)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
        <path
          d="M27.063 53.474 c 5.13 4.099 11.18 6.352 15.335 7.07 l 0.528 5.275 c -5.488 -2.333 -11.267 -5.86 -17.338 -10.582 L27.063 53.474 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(105,64,49)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
        <path
          d="M52.991 48.359 c -0.835 7.356 -3.874 13.97 -6.621 17.85 l 3.776 4.633 c 2.527 -6.231 4.335 -13.647 5.426 -22.25 L52.991 48.359 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(105,64,49)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
        <path
          d="M55.901 90 c -6.594 -6.586 -2.545 -18.917 -5.131 -27.863 c -2.637 -6.873 -4.699 -9.662 -4.89 -16.624 h -1.823 c -0.849 4.947 -0.315 10.133 1.823 15.595 c -3.321 -4.643 -6.821 -8.047 -10.531 -9.988 l -1.881 1.897 c 4.548 3.296 8.895 9.794 8.498 17.247 c 0 8.93 -1.175 14.565 -6.223 19.735 H 55.901 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(120,74,56)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
        <path
          d="M78.207 39.96 c 0 -2.186 -1.063 -4.12 -2.695 -5.328 c 0.531 -0.953 0.835 -2.05 0.835 -3.218 c 0 -3.662 -2.969 -6.631 -6.631 -6.631 c -0.375 0 -0.74 0.039 -1.097 0.098 c -0.351 -0.531 -0.775 -1.007 -1.26 -1.417 c 0.489 -0.925 0.769 -1.977 0.769 -3.096 c 0 -3.662 -2.969 -6.631 -6.631 -6.631 c -0.526 0 -1.035 0.068 -1.526 0.183 c -1.216 -1.466 -3.051 -2.4 -5.105 -2.4 c -0.375 0 -0.74 0.039 -1.097 0.098 c -1.187 -1.796 -3.221 -2.982 -5.534 -2.982 c -2.374 0 -4.451 1.252 -5.622 3.127 c -0.561 -0.154 -1.149 -0.243 -1.759 -0.243 c -2.678 0 -4.98 1.591 -6.027 3.877 c -0.421 -0.084 -0.855 -0.129 -1.3 -0.129 c -3.446 0 -6.276 2.628 -6.599 5.989 c -0.351 -0.058 -0.71 -0.095 -1.077 -0.095 c -3.662 0 -6.631 2.969 -6.631 6.631 c 0 0.189 0.013 0.375 0.028 0.56 c -1.382 1.215 -2.258 2.991 -2.258 4.976 c 0 0.866 0.171 1.691 0.473 2.449 c -2.808 0.771 -4.874 3.335 -4.874 6.389 c 0 1.851 0.76 3.524 1.984 4.727 c -0.592 0.993 -0.939 2.149 -0.939 3.388 c 0 3.662 2.969 6.631 6.631 6.631 c 0.996 0 1.937 -0.226 2.785 -0.619 c 1.201 1.698 3.176 2.81 5.414 2.81 c 2.359 0 4.425 -1.236 5.601 -3.092 c 3.411 -0.274 6.095 -3.123 6.095 -6.604 c 0 -0.289 -0.025 -0.571 -0.061 -0.85 c 0.557 0.152 1.141 0.24 1.746 0.24 c 1.517 0 2.911 -0.515 4.029 -1.373 c 0.069 0.1 0.141 0.197 0.216 0.293 c -0.006 0.104 -0.016 0.206 -0.016 0.311 c 0 3.177 2.575 5.752 5.752 5.752 c 0.846 0 1.647 -0.187 2.371 -0.516 c 0.393 3.287 3.176 5.839 6.569 5.839 c 3.425 0 6.243 -2.597 6.594 -5.93 c 0.254 0.029 0.51 0.049 0.772 0.049 c 3.662 0 6.631 -2.969 6.631 -6.631 c 0 -0.267 -0.02 -0.528 -0.051 -0.787 C76.79 44.686 78.207 42.489 78.207 39.96 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(118,161,52)", // light green
            // fill: "rgb(242, 96, 29)", // light orange
            // fill: "rgb(250, 43, 32)", // light red
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
        <path
          d="M53.531 38.027 c 0.823 -0.584 1.361 -1.542 1.361 -2.628 c 0 -0.965 -0.426 -1.828 -1.097 -2.418 c 0.541 -0.576 0.874 -1.349 0.874 -2.202 c 0 -1.121 -0.573 -2.108 -1.442 -2.685 c 0.03 -0.175 0.048 -0.354 0.048 -0.538 c 0 -1.78 -1.443 -3.223 -3.223 -3.223 c -0.046 0 -0.091 0.005 -0.136 0.007 c -0.044 -0.147 -0.1 -0.289 -0.164 -0.427 c 1.008 -0.545 1.694 -1.611 1.694 -2.837 c 0 -1.299 -0.771 -2.416 -1.878 -2.926 c 0.305 -0.493 0.485 -1.072 0.485 -1.694 c 0 -1.78 -1.443 -3.223 -3.223 -3.223 c -1.55 0 -2.844 1.095 -3.152 2.553 c -0.339 -0.121 -0.702 -0.19 -1.082 -0.19 c -1.587 0 -2.904 1.149 -3.171 2.659 c -0.462 -0.255 -0.992 -0.402 -1.557 -0.402 c -1.78 0 -3.223 1.443 -3.223 3.223 c 0 0.045 0.005 0.089 0.007 0.133 c -0.364 -0.143 -0.76 -0.224 -1.174 -0.224 c -1.78 0 -3.223 1.443 -3.223 3.223 c 0 0.985 0.443 1.866 1.14 2.457 c -0.697 0.591 -1.14 1.472 -1.14 2.457 c 0 0.129 0.01 0.256 0.024 0.381 c -0.453 -0.242 -0.969 -0.381 -1.519 -0.381 c -1.78 0 -3.223 1.443 -3.223 3.223 c -1.78 0 -3.223 1.443 -3.223 3.223 c 0 0.679 0.211 1.308 0.57 1.828 c -1.329 0.398 -2.298 1.628 -2.298 3.087 c 0 0.469 0.102 0.913 0.282 1.315 c -1.053 0.53 -1.776 1.618 -1.776 2.877 c 0 1.78 1.443 3.223 3.223 3.223 c 0.549 0 1.066 -0.138 1.519 -0.381 c -0.015 0.125 -0.024 0.252 -0.024 0.381 c 0 1.78 1.443 3.223 3.223 3.223 c 1.78 0 3.223 -1.443 3.223 -3.223 C54.669 39.498 54.227 38.618 53.531 38.027 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(132,179,61)", // lighter green
            // fill: "rgb(247, 107, 42)", // lighter orange
            // fill: "rgb(247, 52, 42)", // lighter red
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
        <path
          d="M71.035 40.933 c 0 -1.78 -1.443 -3.223 -3.223 -3.223 c -1.78 0 -3.223 1.443 -3.223 3.223 c 0 0.129 0.01 0.256 0.024 0.381 c -0.453 -0.242 -0.969 -0.381 -1.519 -0.381 c -1.78 0 -3.223 1.443 -3.223 3.223 c 0 0.679 0.211 1.308 0.57 1.828 c -1.329 0.398 -2.298 1.628 -2.298 3.087 c 0 0.469 0.102 0.913 0.282 1.315 c -1.053 0.53 -1.776 1.618 -1.776 2.877 c 0 1.78 1.443 3.223 3.223 3.223 c 0.549 0 1.066 -0.138 1.519 -0.381 c -0.015 0.125 -0.024 0.252 -0.024 0.381 c 0 1.78 1.443 3.223 3.223 3.223 c 1.78 0 3.223 -1.443 3.223 -3.223 c 1.78 0 3.223 -1.443 3.223 -3.223 C72.171 42.404 71.729 41.525 71.035 40.933 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(132,179,61)", // lighter green
            // fill: "rgb(247, 107, 42)", // lighter orange
            // fill: "rgb(247, 52, 42)", // lighter red
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

export default Group7;
