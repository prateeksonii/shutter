import type { GetServerSideProps, NextPage } from "next";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import { styled } from "stitches.config";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: "/app",
      permanent: true,
    },
  };
};

const Home: NextPage = () => {
  return (
    <Page>
      <Navbar />
      <Hero>
        <Heading type="display">The messenger that focus on privacy.</Heading>
        <Button variant="google" onClick={() => signIn("google")}>
          <ButtonChild>
            <AiOutlineGoogle size={28} />
            <span>Sign in with Google</span>
          </ButtonChild>
        </Button>
      </Hero>
    </Page>
  );
};

export default Home;

const Hero = styled("div", {
  height: "calc(100vh - 60px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const ButtonChild = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});
