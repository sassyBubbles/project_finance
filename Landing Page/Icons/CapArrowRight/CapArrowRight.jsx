import React from "react";

export const CapArrowRight = ({ className }) => {
  return (
    <svg
      className={`cap-arrow-right ${className}`}
      fill="none"
      height="22"
      viewBox="0 0 20 22"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.5 2C6.5 2 9.5 7.25 18.5 11C9.5 14.75 6.5 20 6.5 20"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
};
