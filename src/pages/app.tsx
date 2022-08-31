import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { secureRoute } from "@/utils/secureRoute";
import { nanoid } from "nanoid";
import { GetServerSideProps, NextPage } from "next";
import { DefaultSession } from "next-auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { styled } from "stitches.config";

type AppProps = {
  user: DefaultSession["user"];
};

type Contact = {
  id: string;
  label: string;
  contact?: any;
};

export const getServerSideProps: GetServerSideProps = secureRoute();

const App: NextPage<AppProps> = ({ user }) => {
  const [contactsList, setContactsList] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact>();

  const handleAddContact = () => {
    const id = nanoid();
    setContactsList([{ id, label: "New chat" }, ...contactsList]);
  };

  useEffect(() => {
    setSelectedContact(contactsList[0]);
  }, [contactsList]);

  return (
    <>
      <Head>
        <title>Shutter</title>
      </Head>
      <MainGrid>
        <Sidebar />
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
              <Avatar size="md">{user?.name?.split(" ")[0][0]}</Avatar>
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
        <Right>
          <ContactContainer>
            {!selectedContact.contact ? (
              <ContactLabelInput placeholder="Type contact's email address" />
            ) : (
              selectedContact.label
            )}
          </ContactContainer>
        </Right>
      </MainGrid>
    </>
  );
};

export default App;

const MainGrid = styled("main", {
  display: "grid",
  gridTemplateColumns: "80px 400px auto",
});

const Left = styled("div", {
  backgroundColor: "$darkest",
});

const Right = styled("div", {
  backgroundColor: "$darker",
});

const ProfileContainer = styled("div", {
  padding: "1rem",
  borderBottom: "1px solid $darker",
  height: "90px",
  display: "flex",
  alignItems: "center",
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
