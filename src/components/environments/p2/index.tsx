import { lazy } from "react";
import { HOC } from "~/container/HOC";

export const P2 = lazy(() =>
  import("~/components/ecosystems/Page").then(({ Page }) => HOC(Page, {})),
);
