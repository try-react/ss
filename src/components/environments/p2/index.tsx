import { lazy } from "react";
import { HOC } from "~/components/service/HOC";

export const P2 = lazy(() =>
  import("~/components/ecosystems/Page").then(({ Page }) => HOC(Page, {})),
);
