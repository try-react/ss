import React, { FC } from "react";
import { useRoute } from "react-router5";
import { routes } from "./routes";

export const Route: FC = () => {
  const { route } = useRoute();
  if (!route) {
    return <>404</>;
  }

  const findComponent = () =>
    routes.find((r) => r.name === route.name)?.Component;

  const Component = findComponent();
  if (!Component) {
    return <>???</>;
  }

  return <Component />;
};
