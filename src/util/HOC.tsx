import React, { FC } from "react";

type ComponentFactoryT = <T>(Component: FC<T>, props: T) => () => JSX.Element;
/**
 *
 * ```tsx
 * () => <Component {...props}>
 * ```
 */
export const ComponentFactory: ComponentFactoryT = (C, p) => () => <C {...p} />;
