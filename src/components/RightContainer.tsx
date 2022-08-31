import type { Contact } from "@/types/appTypes";
import type { FC } from "react";
import { styled } from "stitches.config";

type RightContainerProps = {
  contact?: Contact;
};

const RightContainer: FC<RightContainerProps> = ({ contact }) => {
  return (
    <Right>
      <ContactContainer>
        {!contact?.contact ? (
          <ContactLabelInput placeholder="Type contact's email address" />
        ) : (
          contact.label
        )}
      </ContactContainer>
    </Right>
  );
};

export default RightContainer;

const Right = styled("div", {
  backgroundColor: "$darker",
});

const ContactContainer = styled("div", {
  padding: "1rem",
  height: "90px",
  display: "flex",
  alignItems: "center",
  fontSize: "1.4rem",
  backgroundColor: "$dark",
});

const ContactLabelInput = styled("input", {
  width: "100%",
  padding: "1rem",
  backgroundColor: "transparent",
  color: "$light",
  fontSize: "1.4rem",
  border: "none",
  outline: "1px solid $dark",
});
