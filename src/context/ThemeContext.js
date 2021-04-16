import React from "react";

export const themes = {
  darkmode: {
    color: "white",
  },
  lightmode: {
    color: "black",
  },
};

const ThemeContext = React.createContext(themes);

export default ThemeContext;
