import { lazy } from "react";
import { HOC } from "~/container/HOC";

export const Demo10 = lazy(() =>
  import("~/components/ecosystems/Router5Demo").then(({ Router5Demo10 }) =>
    HOC(Router5Demo10, {}),
  ),
);
