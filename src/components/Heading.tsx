import { styled } from "stitches.config";

export default styled("h1", {
  defaultVariants: {
    type: "default",
  },

  variants: {
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
