import { authRouter } from "./routers/authRouter";
import { createTRPCRouter } from "./trpc";

export const router = createTRPCRouter({
  auth: authRouter,
});

export type AppRouter = typeof router;
