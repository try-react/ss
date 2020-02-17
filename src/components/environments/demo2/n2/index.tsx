import { lazy } from "react";

export const Demo22 = lazy(() =>
  import("~/components/ecosystems/Router5Demo").then(({ Router5Demo22 }) => ({
    default: Router5Demo22,
  })),
);
