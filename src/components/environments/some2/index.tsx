import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/Lazy").then(({ Lazy2 }) => ({
    default: Lazy2,
  })),
);

export const Component: FC = () => <C />;
