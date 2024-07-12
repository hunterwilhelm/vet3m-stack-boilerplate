import { Button, Code, Stack, TextInput } from "@mantine/core";
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
  const authMutation = api.auth.login.useMutation();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Stack>
      <TextInput
        label="Username"
        value={username}
        onChange={(event) => setUsername(event.currentTarget.value)}
      />
      <TextInput
        label="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <Button
        onClick={() => {
          authMutation.mutate({ username, password });
        }}
      >
        Login
      </Button>
      <Code>
        Status: {authMutation.status}{" "}
        {authMutation.data?.token ?? authMutation.error?.message}
      </Code>
      <Link to="/settings">
        <Button>Settings</Button>
      </Link>
    </Stack>
  );
}
