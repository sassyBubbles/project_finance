import React from "react";
import "./style.css";

export const ButtonOutline = ({
  className,
  signUpClassName,
  text = "Copy",
}) => {
  return (
    <div className={`button-outline ${className}`}>
      <div className={`text-wrapper ${signUpClassName}`}>{text}</div>
    </div>
  );
};