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

/**
 * init 変数初期化用
 */
const useUnMount = () => {
  useEffect(
    () => () => {
      init = false;
    },
    [],
  );
};

/**
 * `init === false` の場合
 * `throw Promise` |> 戻り値のセット
 */
export const useButton = () => {
  useUnMount();
  !init && fetchS();
  const [x, setX] = useState(data);
  const { id } = x;
  return { id, setX, txt: "foo" };
};
