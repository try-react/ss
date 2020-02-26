import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/Router5Demo").then(({ Router5Demo10 }) => ({
    default: Router5Demo10,
  })),
);

export const Component: FC = () => <C />;
