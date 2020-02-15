import React, { FC } from "react";
import { useRoute } from "react-router5";

export const Router5Demo11X: FC = () => {
  const { route } = useRoute();
  const { id } = route.params;
  return <>Router5Demo1-{id}</>;
};
