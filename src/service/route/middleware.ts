import { Router, Route } from "router5";
import transitionPath from "router5-transition-path";

// TODO オーバースペックすぎる
// TODO onActivate
type MW = (routes: Route[]) => Parameters<Router["useMiddleware"]>[0];

export const mw: MW = (routes) => () => async (toState, fromState) => {
  const { toActivate } = transitionPath(toState, fromState);

  const onActivateHandlers = toActivate
    .map((segment) => routes.find((r) => r.name === segment)?.onActivate)
    .filter(Boolean);

  if (onActivateHandlers.length === 0) return { ...toState, data: {} };

  const res = await Promise.all(
    onActivateHandlers.map((callback) => callback()),
  );
  const routeData = res.reduce(
    (accData, rData) => Object.assign(accData, rData),
    {},
  );
  return { ...toState, data: routeData };
};
