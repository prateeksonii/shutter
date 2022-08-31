import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { secureRoute } from "@/utils/secureRoute";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { styled } from "stitches.config";

export const getServerSideProps: GetServerSideProps = secureRoute();

const App: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shutter</title>
      </Head>
      <MainGrid>
        <Sidebar />
      </MainGrid>
    </>
  );
};

export default App;

const MainGrid = styled("main", {
  display: "grid",
  gridTemplateColumns: "80px auto",
});
