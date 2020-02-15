// import { Router } from "router5";
// import transitionPath from "router5-transition-path";
// import { CustomRoute } from "./routes";

// type MW = (routes: CustomRoute[]) => Parameters<Router["useMiddleware"]>[0];

// export const mw: MW = (routes) => () => async (toState, fromState) => {
//   const { toActivate } = transitionPath(toState, fromState);

//   const onActivateHandlers = toActivate
//     .map((segment) => routes.find((r) => r.name === segment)?.onActivate)
//     .filter(Boolean);

//   if (onActivateHandlers.length === 0) return { ...toState, data: {} };

//   const res = await Promise.all(
//     onActivateHandlers.map((callback) => callback()),
//   );
//   const routeData = res.reduce(
//     (accData, rData) => Object.assign(accData, rData),
//     {},
//   );

//   return { ...toState, data: routeData };
// };

// 依存パラメタ
// ---------------------------------------------------------
// router.setDependencies({ foo: "xxxxxxxxx" });
// useRouter().getDependencies()
// ---------------------------------------------------------

// アクセス制限
// ---------------------------------------------------------
// const canActivate = (router) => (toState, fromState) => {
//   return false;
// };
// router.canActivate("some", canActivate);
// ---------------------------------------------------------
