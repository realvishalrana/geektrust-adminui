import React from "react";

const DoubleLeftArrowIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="24"
      height="24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12l7-7m0 14l-7-7m10 0l7-7m0 14l-7-7"
      />
    </svg>
  );
};

export default DoubleLeftArrowIcon;
