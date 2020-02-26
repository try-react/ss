import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/Router5Demo").then(({ Router5Demo21 }) => ({
    default: Router5Demo21,
  })),
);

export const Component: FC = () => <C />;
