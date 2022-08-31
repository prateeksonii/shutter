import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import LeftContainer from "@/components/LeftContainer";
import Navbar from "@/components/Navbar";
import RightContainer from "@/components/RightContainer";
import Sidebar from "@/components/Sidebar";
import { Contact } from "@/types/appTypes";
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
        <LeftContainer
          user={user}
          contactsList={contactsList}
          handleAddContact={handleAddContact}
        />
        <RightContainer contact={selectedContact} />
      </MainGrid>
    </>
  );
};

export default App;

const MainGrid = styled("main", {
  display: "grid",
  gridTemplateColumns: "80px 400px auto",
});
