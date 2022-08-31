import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";

export const secureRoute =
  (props?: any): GetServerSideProps =>
  async ({ req, res }) => {
    const session = await unstable_getServerSession(req, res, authOptions);

    if (session) {
      return {
        props: {
          user: session.user,
        },
      };
    }

    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  };
