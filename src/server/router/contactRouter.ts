import { contactEmailFormValidator } from "@/common/contactValidators";
import { createProtectedRouter, createRouter } from "./context";

const contactRouter = createProtectedRouter().query("findByEmail", {
  input: contactEmailFormValidator,
  async resolve({ ctx, input }) {
    if (input.email === ctx.session?.user?.email) return null;

    return ctx.prisma.user.findUnique({
      where: {
        email: input.email,
      },
    });
  },
});

export default contactRouter;
