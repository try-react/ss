import React, { FC, Suspense } from "react";

type _Props = {
  id: number;
};

const SimpleLabelComponent: FC<_Props> = ({ id }) => <>{id}</>;

const SimpleLabelSuspense: FC = ({ children }) => (
  <Suspense fallback={<div>~[id 取得中]~</div>}>{children}</Suspense>
);

type Props = { useLazyFetchId: () => _Props };

export const SimpleLabel: FC<Props> = ({ useLazyFetchId }) => {
  const Component = () => <SimpleLabelComponent {...useLazyFetchId()} />;

  return (
    <SimpleLabelSuspense>
      <Component />
    </SimpleLabelSuspense>
  );
};
