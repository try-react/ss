import React, { FC } from "react";

type HOCType = <T>(Component: FC<T>, props: T) => () => JSX.Element;
export const HOC: HOCType = (C, p) => () => <C {...p} />;
