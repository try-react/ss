import React, { FC, lazy } from "react";
const C = lazy(() =>
  import("~/components/ecosystems/ContentList").then(({ ContentList }) => ({
    default: ContentList,
  })),
);

export const Component: FC = () => <C />;
