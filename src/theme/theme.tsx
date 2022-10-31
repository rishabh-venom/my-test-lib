import React from "react";
import { ThemeProvider } from "styled-components";

export interface LegoProviderProps {
  children: React.ReactNode;
}

const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

export const LegoProvider = (props: LegoProviderProps) => {
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
