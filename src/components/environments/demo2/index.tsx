import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/Router5Demo").then(({ Router5Demo20 }) => ({
    default: Router5Demo20,
  })),
);

export const Component: FC = () => <C />;
