import createRouter from "router5";
import { routes } from "./routes";
import { mw } from "./middleware";
import browserPlugin from "router5-plugin-browser";
import { lifeCycle } from "./aaaaaaaaa";

const _router = createRouter(routes, {
  defaultRoute: "top",
});
_router.useMiddleware(mw(routes));
_router.usePlugin(browserPlugin());
_router.usePlugin(lifeCycle);
_router.start();

export const router = _router;

// 依存パラメタ
// ---------------------------------------------------------
// _router.setDependencies({ foo: "xxxxxxxxx" });
// useRouter().getDependencies()
// ---------------------------------------------------------

// アクセス制限
// ---------------------------------------------------------
// const canActivate = (_router) => (toState, fromState) => {
//   return false;
// };
// _router.canActivate("some", canActivate);
// ---------------------------------------------------------
