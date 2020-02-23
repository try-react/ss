import React, { FC } from "react";

type P<T> = {
  suspenseHook: () => T;
  SuspenseComponent: FC;
  InnerComponent: FC<T>;
};

type HOCLazyFetchType = <T>(p: P<T>) => () => JSX.Element;

export const HOCLazyFetch: HOCLazyFetchType = ({
  suspenseHook,
  SuspenseComponent,
  InnerComponent,
}) => () => {
  const LazyComponent = () => <InnerComponent {...suspenseHook()} />;

  return (
    <SuspenseComponent>
      <LazyComponent />
    </SuspenseComponent>
  );
};
