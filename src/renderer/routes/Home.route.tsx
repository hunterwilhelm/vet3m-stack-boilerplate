import { Button, Code, Loader, Stack } from "@mantine/core";
import { createRoute, Link } from "@tanstack/react-router";
import React from "react";
import api from "../trpc-client/api";
import { IndexRoute } from "./Index.route";

export const HomeRoute = createRoute({
  getParentRoute: () => IndexRoute,
  path: "/",
  component: Home,
});

export default function Home() {
  const { data } = api.greeting.useQuery({ name: "Electron" });
  api.subscription.useSubscription(undefined, {
    onData: (data) => {
      console.log(data);
    },
  });

  if (!data) {
    return <Loader />;
  }

  return (
    <Stack>
      <Code>{data.text}</Code>
      <Link to="/settings">
        <Button>Settings</Button>
      </Link>
    </Stack>
  );
}
