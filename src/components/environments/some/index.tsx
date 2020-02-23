import { lazy } from "react";
import { HOC } from "~/containers/HOC";

export const Some = lazy(() =>
  import("~/components/ecosystems/Lazy").then(({ Lazy }) => HOC(Lazy, {})),
);
