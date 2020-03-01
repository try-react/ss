import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/Form").then(({ Form }) => ({
    default: Form,
  })),
);

export const Component: FC = () => <C />;
