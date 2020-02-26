import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/Some").then(({ Study1 }) => ({
    default: Study1,
  })),
);

export const Component: FC = () => <C />;
