import { lazy } from "react";
import { HOC } from "~/container/HOC";
import { useLazyFetchId } from "~/hook/useLazyFetchId";

// TODO
// 遷移中をひろって プログレスバー
// https://router5.js.org/advanced/loading-async-data

// TODO atomic component 改善につながるかも
// ----------------------------------------------------
// inbox がいいでき
// https://stackblitz.com/edit/react-router5-new-context-api

// route node
// https://stackblitz.com/edit/react-router5-new-context-api?file=components%2FInbox.js
// ----------------------------------------------------

export const Some = lazy(() =>
  import("~/components/ecosystems/Lazy").then(({ Lazy }) =>
    HOC(Lazy, { useLazyFetchId }),
  ),
);
