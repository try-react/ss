import { lazy } from "react";
import { HOC } from "~/containers/HOC";

export const createPage = lazy(() =>
  import("~/components/ecosystems/Some/FlexBox2").then(({ FlexBox2 }) =>
    HOC(FlexBox2, {}),
  ),
);
