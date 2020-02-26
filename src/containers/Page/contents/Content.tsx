/**
 *
 * 実験的コード
 *
 * rxjsで外部からまるごと操作
 * 面白いけど まぁなし
 *
 */
import React, { FC, useEffect, useState } from "react";
import { Subject } from "rxjs";

export const subject = new Subject<FC<{}>>();
const C: FC = () => <>準備中✍️</>;

const useContent = () => {
  const [Component, setComponent] = useState({ Component: C });

  useEffect(() => {
    subject.subscribe({
      next: (p) => setComponent({ Component: p }),
    });
  }, [setComponent]);

  return Component;
};

export const Content: FC = () => {
  const { Component } = useContent();
  return <Component />;
};
