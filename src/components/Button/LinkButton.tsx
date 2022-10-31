import React from "react";
import { ButtonProps } from "./types";
import { LinkButtonContainer } from "./styles";

const LinkButton = (props: ButtonProps) => {
  return <LinkButtonContainer>{props.label}</LinkButtonContainer>;
};

export default LinkButton;
