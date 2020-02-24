import { routes } from "~/route";
import { Router } from "router5";

type OnActivate = Parameters<Router["useMiddleware"]>[0];

export const onActivate: OnActivate = () => async (toState) => {
  const fn = routes.find((p) => p.name === toState.name)?._meta?.onActivate;

  if (!fn) {
    return new Promise((r) => r({ ...toState }));
  }

  const data = await fn();
  return new Promise((r) => r({ ...toState, _meta: { data } }));
};
