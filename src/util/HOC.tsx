import React, { FC } from "react";

type HOCType = <T>(
  Component: FC<T>,
  props: T,
) => { default: () => JSX.Element };
// eslint-disable-next-line react/display-name
export const HOC: HOCType = (C, p) => ({ default: () => <C {...p} /> });
