import React, { FC, useContext } from "react";

import { SomeContext, someSubject } from "~/containers/Context/SomeContext";

// store.dispatch() 相当であるが このコンポーネントが1度はレンダリングされる必要がある
someSubject.next("ok");

const ICA: FC = () => {
  const { state, dispatch } = useContext(SomeContext);
  return (
    <>
      <div>ICA</div>
      {state.stringV.str}
      {state.numV.num}
      <button type="button" onClick={() => dispatch.setNumV({ num: 800 })}>
        setNumV
      </button>
    </>
  );
};

const ICB: FC = () => {
  const { state, dispatch } = useContext(SomeContext);
  return (
    <>
      <div>ICB</div>
      {state.stringV.str}
      {state.numV.num}
      <button type="button" onClick={() => dispatch.setNumV({ num: 900 })}>
        setNumV
      </button>
    </>
  );
};
export const Try: FC = () => (
  <>
    <ICA />
    <hr />
    <ICB />
  </>
);
