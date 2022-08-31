import type { Contact } from "@/types/appTypes";
import { DefaultSession } from "next-auth";
import type { FC } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { styled } from "stitches.config";
import Avatar from "./Avatar";
import Button from "./Button";
import Heading from "./Heading";

type LeftContainerProps = {
  user: DefaultSession["user"];
  contactsList: Contact[];
  handleAddContact: () => void;
};

const LeftContainer: FC<LeftContainerProps> = (props) => {
  const { contactsList, handleAddContact, user } = props;

  const name = user?.name?.split(" ")[0];

  return (
    <Left>
      <ProfileContainer>
        <Heading
          size="md"
          css={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Avatar size="md">{name && name[0]}</Avatar>
          {user?.name}
          <Button
            size="lg"
            css={{ marginLeft: "auto" }}
            onClick={handleAddContact}
          >
            <FiPlusCircle />
          </Button>
        </Heading>
      </ProfileContainer>
      {contactsList.map((contact) => (
        <Button
          key={contact.id}
          variant="contact"
          css={{ borderBottom: "1px solid $darker" }}
        >
          {contact.label}
        </Button>
      ))}
    </Left>
  );
};

export default LeftContainer;

const Left = styled("div", {
  backgroundColor: "$darkest",
});

const ProfileContainer = styled("div", {
  padding: "1rem",
  borderBottom: "1px solid $darker",
  height: "90px",
  display: "flex",
  alignItems: "center",
});
