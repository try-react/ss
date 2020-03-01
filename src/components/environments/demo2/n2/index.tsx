import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/Router5Demo").then(({ Router5Demo22 }) => ({
    default: Router5Demo22,
  })),
);

type Props = Parameters<typeof C>[0];
export const Component: FC<Props> = (props) => <C {...props} />;
