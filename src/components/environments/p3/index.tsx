import { lazy } from "react";
import { HOC } from "~/containers/HOC";

export const createPage = lazy(() =>
  import("~/components/ecosystems/BeautifulTxt").then(({ BeautifulTxt }) =>
    HOC(BeautifulTxt, {}),
  ),
);
