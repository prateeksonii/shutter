import { styled } from "stitches.config";

export default styled("div", {
  display: "grid",
  placeItems: "center",
  variants: {
    size: {
      md: {
        height: "2.2rem",
        width: "2.2rem",
        borderRadius: "999px",
        backgroundColor: "$primary",
      },
    },
  },
});
