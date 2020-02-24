import createRouter from "router5";
import { routes } from "./routes";
import browserPlugin from "router5-plugin-browser";
import { lifeCycle } from "./lifeCycle";
import { middleware } from "./middleware";

const _router = createRouter(routes);
_router.usePlugin(browserPlugin(), lifeCycle);
_router.useMiddleware(middleware);

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
