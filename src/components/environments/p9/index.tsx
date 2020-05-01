import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/Some/FullScreen").then(({ FullScreen }) => ({
    default: FullScreen,
  })),
);

export const Component: FC = () => <C />;
