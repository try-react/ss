import { lazy } from "react";
import { HOC } from "~/util/HOC";
import { useButton } from "~/hooks/useButton";

// TODO
// 遷移中をひろって プログレスバー
// inbox がいいでき
// https://stackblitz.com/edit/react-router5-new-context-api

// route node
// https://stackblitz.com/edit/react-router5-new-context-api?file=components%2FInbox.js

export const Some = lazy(() =>
  import("~/components/ecosystems/Lazy").then(({ Lazy }) =>
    HOC(Lazy, { useButton }),
  ),
);
