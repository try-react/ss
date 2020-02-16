import React, { FC } from "react";

type HOCType = <T>(
  Component: FC<T>,
  props: T,
) => { default: () => JSX.Element };
/**
 * コンポーネントに propsを注入
 */
// eslint-disable-next-line react/display-name
export const HOC: HOCType = (C, p) => ({ default: () => <C {...p} /> });

type HOCUseHooksType = <T>(
  Component: FC<T>,
  hooks: () => T,
) => { default: () => JSX.Element };
/**
 * コンポーネントに hooks展開して propsを注入
 */
export const HOCUseHooks: HOCUseHooksType = (C, f) => ({
  // eslint-disable-next-line react/display-name
  default: () => <C {...f()} />,
});
