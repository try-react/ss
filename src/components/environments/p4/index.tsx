import { lazy } from "react";
import { HOC } from "~/containers/HOC";

export const createPage = lazy(() =>
  import("~/components/ecosystems/Some").then(({ Study1 }) => HOC(Study1, {})),
);
