import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/Some/FlexBox").then(({ FlexBox }) => ({
    default: FlexBox,
  })),
);

export const Component: FC = () => <C />;
