import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/Lazy").then(({ Lazy }) => ({
    default: Lazy,
  })),
);

export const Component: FC = () => <C />;
