import { styled } from "stitches.config";

export default styled("h1", {
  margin: 0,
  padding: 0,
  defaultVariants: {
    type: "default",
  },
  variants: {
    size: {
      md: {
        fontWeight: 500,
        fontSize: "1.5rem",
      },
    },
    type: {
      default: {},
      display: {
        fontSize: "4rem",
        fontWeight: 800,
        letterSpacing: -2,
      },
    },
  },
});
