import type { Contact } from "@/types/appTypes";
import { User } from "@prisma/client";
import { FC, useState } from "react";
import { styled } from "stitches.config";
import Avatar from "./Avatar";
import ContactEmailForm from "./ContactEmailForm";
import Heading from "./Heading";

type RightContainerProps = {
  contact?: Contact;
};

type UserLabelProps = {
  user: User;
};

const UserLabel: FC<UserLabelProps> = ({ user }) => {
  const firstName = user.name?.split(" ")[0] ?? "A";

  return (
    <UserLabelContainer>
      <Avatar size="md">{firstName[0]}</Avatar>
      <div className="details">
        <Heading size="md">{user.name}</Heading>
        <div>{user.email}</div>
      </div>
    </UserLabelContainer>
  );
};

const RightContainer: FC<RightContainerProps> = ({ contact }) => {
  const [selectedUser, setSelectedUser] = useState<User>();

  return (
    <Right>
      <ContactContainer>
        {!contact ? null : !contact.contact ? (
          selectedUser ? (
            <UserLabel user={selectedUser} />
          ) : (
            <ContactEmailForm setSelectedUser={setSelectedUser} />
          )
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
  backgroundColor: "$dark",
});

const UserLabelContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  ".details": {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",

    div: {
      fontWeight: 300,
      fontSize: "0.9rem",
    },
  },
});
