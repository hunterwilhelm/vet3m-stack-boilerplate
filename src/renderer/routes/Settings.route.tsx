import { Button } from "@mantine/core";
import { createRoute, Link } from "@tanstack/react-router";
import React from "react";
import { IndexRoute } from "./Index.route";

export const SettingsRoute = createRoute({
  getParentRoute: () => IndexRoute,
  path: "/settings",
  component: Settings,
});

function Settings() {
  return (
    <Link to="/">
      <Button>Home</Button>
    </Link>
  );
}
