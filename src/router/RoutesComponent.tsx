import { HOC } from "~/util/HOC";
import React, { lazy, FC } from "react";
import { useRoute } from "react-router5";

const Xxx = lazy(() =>
  import("~/components/Atoms/Button").then(({ Button }) => ({
    default: HOC(Button, { txt: "abc" }),
  })),
);

export const RoutesComponent: FC = () => {
  const { route } = useRoute();
  console.log(route);
  return <Xxx />;
};
