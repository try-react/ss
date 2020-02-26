import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/Router5Demo").then(({ Router5Demo11X }) => ({
    default: Router5Demo11X,
  })),
);

export const Component: FC = () => <C />;
