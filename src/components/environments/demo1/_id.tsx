import { lazy } from "react";
import { HOC } from "~/containers/HOC";

export const Demo11X = lazy(() =>
  import("~/components/ecosystems/Router5Demo").then(({ Router5Demo11X }) =>
    HOC(Router5Demo11X, {}),
  ),
);
