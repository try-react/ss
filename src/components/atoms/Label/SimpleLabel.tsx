import React, { FC, Suspense } from "react";

type Props = {
  id: number;
};

export const SimpleLabel: FC<Props> = ({ id }) => <>id: {id}</>;

export const SimpleLabelSuspense: FC = ({ children }) => (
  <Suspense fallback={<div>id: ~取得中~</div>}>{children}</Suspense>
);
