import { Router } from "router5";
import { routes } from "~/state/route";

type Middleware = Parameters<Router["useMiddleware"]>[0];
export const middleware: Middleware = () => async (toState) => {
  const [match] = routes.filter((v) => v.name === toState.name);
  match?._meta?.transition && (await match._meta.transition());

  return new Promise((r) => r({ ...toState }));
};
