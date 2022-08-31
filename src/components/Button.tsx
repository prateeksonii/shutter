import { styled } from "stitches.config";

export default styled("button", {
  boxShadow: "rgba(0, 0, 0, 0.2) -4px 9px 25px -6px",
  background: "transparent",
  color: "$light",
  border: "none",
  outline: "none",
  cursor: "pointer",
  padding: 0,
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: {},
      google: {
        backgroundColor: "$google",
        color: "$light",
        border: "none",
        outline: "none",
        fontSize: "1.4rem",
        fontWeight: 500,
        padding: "1rem 1.4rem",
        borderRadius: "0.4rem",
        cursor: "pointer",
      },
    },
    size: {
      lg: {
        fontSize: "2rem",
      },
    },
  },
});
