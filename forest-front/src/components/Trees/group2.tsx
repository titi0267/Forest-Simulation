import { TreeStatus } from "@/utils/types";
import React from "react";

const Group2 = (props: { status: TreeStatus }) => {
  const { status } = props;

  const fillFirst =
    status == "Keep"
      ? "rgb(127,178,65)"
      : status == "Cut"
      ? "rgb(255, 13, 13)"
      : "rgb(240, 148, 36)";

  const fillSecond =
    status == "Keep"
      ? "rgb(160,126,99)"
      : status == "Cut"
      ? "rgb(255, 0, 0)"
      : "rgb(207, 124, 23)";

  const fillThird =
    status == "Keep"
      ? "rgb(160,126,99)"
      : status == "Cut"
      ? "rgb(160,126,99)"
      : "rgb(160,126,99)";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      xmlSpace="preserve"
      // onMouseEnter={handleHover} // Add this line
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
          d="M 51.865 1.523 c 2.639 0.961 4.659 2.757 6.26 5.115 c 5.117 -0.776 10.301 0.912 13.976 4.587 c 3.675 3.675 5.364 8.857 4.588 13.975 c 4.168 3.07 6.638 7.929 6.638 13.126 c 0 5.393 -2.644 10.387 -7.091 13.437 c -0.76 2.672 -2.184 5.104 -4.135 7.055 c -3.134 3.134 -7.323 4.754 -11.539 4.754 c -3.088 0 -6.19 -0.869 -8.902 -2.649 l 0.549 -0.836 l -10.447 -1.312 c 0 0 0 0 0 0 l -0.216 0.977 c -0.422 -0.094 -0.843 -0.204 -1.256 -0.329 c -3.807 3.412 -8.875 4.69 -13.641 3.882 c 0.009 -0.082 0.048 -0.316 0.054 -0.379 C 21.64 59.31 16.967 51.451 16.924 45 c -0.041 -6.216 2.696 -12.469 7.394 -16.172 c -0.92 -6.117 1.123 -11.997 4.951 -16.687 c 3.961 -4.852 10.438 -6.889 16.416 -5.562 C 45.933 3.689 48.897 2.544 51.865 1.523"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: fillFirst,
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          stroke-linecap="round"
        />
        <path
          d="M 26.702 62.925 C 21.64 59.31 17.809 51.551 17.767 45.1 c -0.041 -6.216 2.718 -12.047 7.415 -15.75 c -0.92 -6.117 0.952 -12.328 5.086 -16.751 c 4.133 -4.423 9.991 -6.482 15.793 -5.591 c 1.564 -2.275 3.552 -4.128 5.804 -5.483 C 49.745 0.537 47.41 0 44.999 0 c -5.197 0 -10.056 2.47 -13.126 6.639 c -5.117 -0.777 -10.3 0.912 -13.975 4.587 s -5.364 8.857 -4.587 13.975 c -4.169 3.07 -6.638 7.929 -6.638 13.126 c 0 5.393 2.644 10.387 7.091 13.437 c 0.759 2.67 2.183 5.103 4.135 7.055 c 2.456 2.456 5.534 3.942 8.749 4.487 C 26.656 63.223 26.696 62.987 26.702 62.925 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: fillSecond,
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          stroke-linecap="round"
        />
        <path
          d="M 57.523 54.976 l -3.031 -2.947 c -0.387 -0.375 -0.999 -0.378 -1.388 -0.007 l -3.865 3.69 V 40.889 c 0 -0.552 -0.447 -1 -1 -1 h -4.275 c -0.552 0 -1 0.448 -1 1 v 7.186 l -4.745 -4.919 c -0.377 -0.391 -1.063 -0.391 -1.439 0 l -2.52 2.614 c -0.369 0.382 -0.374 0.986 -0.013 1.375 l 6.515 7.007 V 89 c 0 0.553 0.448 1 1 1 h 6.477 c 0.553 0 1 -0.447 1 -1 V 64.29 l 8.276 -7.872 c 0.197 -0.188 0.309 -0.447 0.311 -0.719 C 57.828 55.426 57.718 55.166 57.523 54.976 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: fillThird,
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

export default Group2;
