import { secureRoute } from "@/utils/secureRoute";
import { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = secureRoute();

const App: NextPage = () => {
  return <div>app</div>;
};

export default App;
