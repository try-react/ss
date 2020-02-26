import { lazy } from "react";
import { HOC } from "~/containers/HOC";

export const create = lazy(() =>
  import("~/components/ecosystems/Lazy").then(({ Lazy }) => HOC(Lazy, {})),
);
