import React from "react";
import "./style.css";

export const ButtonPrimary = ({
  className,
  overlapGroupClassName,
  signUpClassName,
  text = "Copy",
}) => {
  return (
    <div className={`button-primary ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className={`sign-up ${signUpClassName}`}>{text}</div>
      </div>
    </div>
  );
};