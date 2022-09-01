import type { Contact } from "@/types/appTypes";
import type { FC } from "react";
import { styled } from "stitches.config";
import ContactEmailForm from "./ContactEmailForm";

type RightContainerProps = {
  contact?: Contact;
};

const RightContainer: FC<RightContainerProps> = ({ contact }) => {
  return (
    <Right>
      <ContactContainer>
        {!contact?.contact ? <ContactEmailForm /> : contact.label}
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
