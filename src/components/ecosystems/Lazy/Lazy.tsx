import React, { FC } from "react";
import { SimpleLabel, SimpleLabelSuspense } from "~/components/atoms/Label";
import { HOCLazyFetch } from "~/container/HOC/HOCLazyFetch";
import { useLazyFetch } from "~/hook/useLazyFetch";

const LazySimpleLabel = HOCLazyFetch<ReturnType<typeof useLazyFetch>>({
  InnerComponent: SimpleLabel,
  SuspenseComponent: SimpleLabelSuspense,
  suspenseHook: useLazyFetch,
});

export const Lazy: FC = () => (
  <>
    <div>~ローディングに関係無い部分~</div>
    <div>
      <LazySimpleLabel />
    </div>
  </>
);
