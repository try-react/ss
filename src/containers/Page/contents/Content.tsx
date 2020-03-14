import React, { FC, useEffect, useState } from "react";
import { Subject } from "rxjs";

const C: FC = () => <>Content準備中</>;
export const contentSubject = new Subject<typeof C>();

const useComponent = () => {
  const [Component, setComponent] = useState({ Component: C });
  return { Component, setComponent };
};

type SetComponent = ReturnType<typeof useComponent>["setComponent"];
const observerFn = (setComponent: SetComponent) => () => {
  contentSubject.subscribe({
    next: (p) => setComponent({ Component: p }),
  });
  return () => contentSubject.unsubscribe();
};

/**
 * 実験的コード
 * rxjsで外部からまるごと操作
 */
const useContent = () => {
  const { Component, setComponent } = useComponent();
  useEffect(observerFn(setComponent), [setComponent]);

  return Component;
};

export const Content: FC = () => {
  const { Component } = useContent();
  return (
    <>
      <Component />
    </>
  );
};
