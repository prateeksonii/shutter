import { authOptions } from "@/pages/api/auth/[...nextauth]";
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { GetServerSidePropsContext } from "next";
import { unstable_getServerSession } from "next-auth";
import { prisma } from "../db/client";

type CreateContextProps = {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["req"];
};

export const createContext = async (
  opts: trpcNext.CreateNextContextOptions
) => {
  const req = opts?.req;
  const res = opts?.res;

  const session = await getServerSession(req, res);

  return {
    req,
    res,
    prisma,
    session,
  };
};

type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => trpc.router<Context>();

export const createProtectedRouter = () => {
  return trpc.router<Context>().middleware(({ ctx, next }) => {
    if (!ctx.session) {
      throw new trpc.TRPCError({ code: "UNAUTHORIZED" });
    }
    return next({
      ctx: {
        ...ctx,
        // infers that `user` is non-nullable to downstream procedures
        user: ctx.session.user,
      },
    });
  });
};

const getServerSession = async (
  req: GetServerSidePropsContext["req"],
  res: GetServerSidePropsContext["res"]
) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  return session;
};
