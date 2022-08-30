import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
  pages: {
    signIn: "/",
  },
  callbacks: {
    authorized: console.log,
  },
});

export const config = { matcher: ["/app"] };
