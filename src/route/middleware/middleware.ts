import { Router } from "router5";
import { setDemo22InitProps } from "~/components/environments/demo2/n2";

type Middleware = Parameters<Router["useMiddleware"]>[0];
export const middleware: Middleware = () => async (toState) => {
  if (toState.name === "demo2.n2") {
    await setDemo22InitProps();
  }
  return new Promise((r) => r({ ...toState }));
};
