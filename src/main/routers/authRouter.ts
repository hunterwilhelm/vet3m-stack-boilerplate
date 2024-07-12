import { z } from "zod";
import { createTRPCRouter, procedure } from "../trpc";

export const authRouter = createTRPCRouter({
  login: procedure
    .input(z.object({ username: z.string(), password: z.string() }))
    .mutation(async ({ input }) => {
      return { token: "123" };
    }),
});
