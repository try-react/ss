import { lazy } from "react";
import { HOC } from "~/container/HOC";

export const P1 = lazy(() =>
  import("~/components/ecosystems/Form").then(({ Form }) => HOC(Form, {})),
);
