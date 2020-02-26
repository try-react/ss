import React, { FC } from "react";

type HOCType = <T>(Component: FC<T>, props: T) => () => JSX.Element;
/**
 * コンポーネントに propsを注入
 */
// eslint-disable-next-line react/display-name
export const HOC: HOCType = (C, p) => () => <C {...p} />;
