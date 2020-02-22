import React, { FC } from "react";

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
