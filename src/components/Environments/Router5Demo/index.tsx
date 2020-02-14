import React, { FC } from "react";
import { useRoute } from "react-router5";

export const Router5Demo1: FC = () => {
  const { route } = useRoute();
  const { id } = route.params;
  return <>Router5Demo1-{id}</>;
};

export const Router5Demo20: FC = () => {
  return <>Router5Demo20</>;
};

export const Router5Demo21: FC = () => {
  return <>Router5Demo21</>;
};

export const Router5Demo22: FC = () => {
  return <>Router5Demo22</>;
};
