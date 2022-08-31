import Avatar from "@/components/Avatar";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { secureRoute } from "@/utils/secureRoute";
import { GetServerSideProps, NextPage } from "next";
import { DefaultSession } from "next-auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { styled } from "stitches.config";

type AppProps = {
  user: DefaultSession["user"];
};

export const getServerSideProps: GetServerSideProps = secureRoute();

const App: NextPage<AppProps> = ({ user }) => {
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
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Avatar size="md">{user?.name?.split(" ")[0][0]}</Avatar>
              {user?.name}
            </Heading>
          </ProfileContainer>
        </Left>
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

const ProfileContainer = styled("div", {
  padding: "1rem",
  borderBottom: "1px solid $darker",
});
