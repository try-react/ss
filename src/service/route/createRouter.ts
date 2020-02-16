import createRouter from "router5";
import { routes } from "./routes";
import { mw } from "./middleware";
import browserPlugin from "router5-plugin-browser";

export const router = createRouter(routes, {
  defaultRoute: "top",
});

const mwStarted = () => (_, __, done) => {
  console.log("変化前");
  done();
};
const mwDone = () => (_, __, done) => {
  console.log("変化後");
  done();
};

router.useMiddleware(mwStarted);
router.useMiddleware(mw(routes));
router.useMiddleware(mwDone);
router.usePlugin(browserPlugin());

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
