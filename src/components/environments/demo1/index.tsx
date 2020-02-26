import { lazy } from "react";
import { HOC } from "~/containers/HOC";

export const create = lazy(() =>
  import("~/components/ecosystems/Router5Demo").then(({ Router5Demo10 }) =>
    HOC(Router5Demo10, {}),
  ),
);
