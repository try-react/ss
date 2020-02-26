import { lazy } from "react";
import { HOC } from "~/containers/HOC";

export const createPage = lazy(() =>
  import("~/components/ecosystems/Router5Demo").then(({ Router5Demo20 }) =>
    HOC(Router5Demo20, {}),
  ),
);
