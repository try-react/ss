import { lazy } from "react";
import { HOC } from "~/components/service/HOC";

export const P1 = lazy(() =>
  import("~/components/ecosystems/Form").then(({ Form }) => HOC(Form, {})),
);
