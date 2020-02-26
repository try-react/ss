import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/BeautifulTxt").then(({ BeautifulTxt }) => ({
    default: BeautifulTxt,
  })),
);

export const Component: FC = () => <C />;
