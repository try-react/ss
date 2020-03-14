/**
 *
 * 実験的なコードではあるが、Contextに出来ない事は無い気がする
 *
 * Contextの state & dispatch を useStateから生成
 * type safeなdispatchが可能
 *
 */
import React, { useState, createContext, useEffect, FC } from "react";
import { Subject } from "rxjs";

const useSomeReducer = () => {
  const [stringV, setStringV] = useState({ str: "x" });
  const [numV, setNumV] = useState({ num: 123 });
  return {
    dispatch: {
      setNumV,
      setStringV,
    },
    state: {
      numV,
      stringV,
    },
  };
};

type SetStringV = ReturnType<typeof useSomeReducer>["dispatch"]["setStringV"];

// ------------------------------------
export const someSubject = new Subject<string>();
const observerFn = (setStringV: SetStringV) => () => {
  someSubject.subscribe({
    next: (p) => setStringV({ str: p }),
  });
  return () => someSubject.unsubscribe();
};
// ------------------------------------

const useSome = () => {
  const { state, dispatch } = useSomeReducer();
  useEffect(observerFn(dispatch.setStringV), [dispatch.setStringV]);
  return {
    dispatch,
    state,
  };
};

// @ts-ignore まーこれは しゃーない
export const SomeContext = createContext<ReturnType<typeof useSome>>();

export const SomeContextProvider: FC = ({ children }) => {
  const { state, dispatch } = useSome();

  return (
    <SomeContext.Provider value={{ dispatch, state }}>
      {children}
    </SomeContext.Provider>
  );
};
