import React from "react";

const RightArrow = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </>
  );
}

export default RightArrow;
