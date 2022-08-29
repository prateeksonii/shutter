import { createStitches } from "@stitches/react";

export const { styled, theme, globalCss } = createStitches({
  theme: {
    colors: {
      darker: "#2c2c2c",
      dark: "#3f3f3f",
      light: "#ffffff",
      grey: "#ccc",
    },
    fonts: {
      inter: "Inter",
    },
  },
});

export const globalStyles = globalCss({
  body: {
    margin: 0,
    backgroundColor: "$darker",
    color: "$light",
    fontFamily: "$inter",
  },
});
