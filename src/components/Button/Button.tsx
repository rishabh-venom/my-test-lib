import React from "react";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  return (
    <button
      style={{
        background: "purple",
        color: "white",
        padding: "15px 20px",
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
