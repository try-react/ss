/**
 * !! バグあり
 * 画面に出入りすると 前回の状態がのこっている lazyFetchをキャンセルできないため
 *
 * Suspense 動作確認用
 */

import { useEffect, useState } from "react";
import { lazyFetch } from "~/util/misc";

let init = false;
let data = { id: 0 };
const fetchS = () => {
  throw lazyFetch().then((r) => {
    init = true;
    data = r;
  });
};

const useUnMount = () => {
  useEffect(
    () => () => {
      init = false;
    },
    [],
  );
};

export const useLazyFetchId = () => {
  useUnMount();
  !init && fetchS();
  const [x, setX] = useState(data);
  const { id } = x;
  return { id, setX, txt: "foo" };
};
