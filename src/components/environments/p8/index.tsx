import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/Some/Try").then(({ Try }) => ({
    default: Try,
  })),
);

export const Component: FC = () => <C />;
