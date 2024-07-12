import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HomeRoute } from "./routes/Home.route";
import { IndexRoute } from "./routes/Index.route";
import { SettingsRoute } from "./routes/Settings.route";
import TRPCReactProvider from "./trpc-client/TRPCReactProvider";

const routeTree = IndexRoute.addChildren([HomeRoute, SettingsRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <TRPCReactProvider>
        <MantineProvider>
          <RouterProvider router={router} />
        </MantineProvider>
      </TRPCReactProvider>
    </StrictMode>
  );
}
