import { lazy } from "react";
import { HOC } from "~/containers/HOC";

export const Demo21 = lazy(() =>
  import("~/components/ecosystems/Router5Demo").then(({ Router5Demo21 }) =>
    HOC(Router5Demo21, {}),
  ),
);
