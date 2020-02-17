import createRouter from "router5";
import { routes, defaultRoute } from "./routes";
import browserPlugin from "router5-plugin-browser";
import { lifeCycle } from "./middleware/lifeCycle";
import { preMakeComponent } from "./middleware/preMakeComponent";

const _router = createRouter(routes, {
  defaultRoute,
});
_router.usePlugin(browserPlugin(), lifeCycle);
_router.useMiddleware(preMakeComponent);

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
