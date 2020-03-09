/**
 *
 * 実験的なコードではあるが、Contextに出来ない事は無い気がする
 *
 * Contextの state & dispatch を useStateから生成
 * type safeなdispatchが可能
 *
 */
import React, {
  FC,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";
import { Subject } from "rxjs";

const useSomeReducer = () => {
  const [stringV, setStringV] = useState({ str: "" });
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
// store.dispatch() 相当
const subject = new Subject<string>();
const observerFn = (setStringV: SetStringV) => () => {
  subject.subscribe({
    next: (p) => setStringV({ str: p }),
  });
};
setTimeout(() => subject.next("Component以外から操作"), 8000);
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
const SomeContext = createContext<ReturnType<typeof useSome>>();

const SomeContextProvider: FC = ({ children }) => {
  const { state, dispatch } = useSome();

  return (
    <SomeContext.Provider value={{ dispatch, state }}>
      {children}
    </SomeContext.Provider>
  );
};

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
  <SomeContextProvider>
    <ICA />
    <hr />
    <ICB />
  </SomeContextProvider>
);
