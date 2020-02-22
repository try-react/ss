import { lazy } from "react";
import { HOC } from "~/container/HOC";

export const Demo22 = lazy(() =>
  import("~/components/ecosystems/Router5Demo").then(({ Router5Demo22 }) =>
    HOC(Router5Demo22, {}),
  ),
);
