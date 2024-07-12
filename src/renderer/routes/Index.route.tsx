import { Tabs } from "@mantine/core";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import React from "react";

export const IndexRoute = createRootRoute({
  component: () => (
    <>
      <Tabs>
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/settings" className="[&.active]:font-bold">
          About
        </Link>
      </Tabs>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
