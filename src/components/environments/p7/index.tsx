import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/Some/CSSGrid").then(({ CSSGrid }) => ({
    default: CSSGrid,
  })),
);

export const Component: FC = () => <C />;
