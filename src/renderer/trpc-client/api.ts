import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "../../main/api";

const api = createTRPCReact<AppRouter>();
export default api;
