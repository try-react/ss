import { lazy } from "react";
import { HOC } from "~/containers/HOC";

export const createPage = lazy(() =>
  import("~/components/ecosystems/ContentList").then(({ ContentList }) =>
    HOC(ContentList, {}),
  ),
);
