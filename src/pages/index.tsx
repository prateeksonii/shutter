import type { NextPage } from "next";
import { AiOutlineGoogle } from "react-icons/ai";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import { styled } from "stitches.config";

const Home: NextPage = () => {
  return (
    <Page>
      <Navbar />
      <Hero>
        <Heading type="display">The messenger that focus on privacy.</Heading>
        <Button variant="google">
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
