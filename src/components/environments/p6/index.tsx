import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/Some/FlexBox2").then(({ FlexBox2 }) => ({
    default: FlexBox2,
  })),
);

export const Component: FC = () => <C />;
