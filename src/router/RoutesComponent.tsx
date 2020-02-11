import React, { FC } from "react";
import { useRoute } from "react-router5";
import { P1 } from "~/components/Environments/P1";
import { Lazy } from "~/components/Environments/Lazy";

export const RoutesComponent: FC = () => {
  const { route } = useRoute();

  if (!route) {
    return <>😇</>;
  }

  if (route.name === "p1") {
    return <P1 />;
  }

  if (route.name === "lazy") {
    return <Lazy />;
  }

  return <>🏮</>;
};
