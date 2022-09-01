import superjson from "superjson";
import contactRouter from "./contactRouter";
import { createRouter } from "./context";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("contact.", contactRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
