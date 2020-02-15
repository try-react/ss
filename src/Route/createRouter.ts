import createRouter from "router5";
import { routes } from "./routes";
// import { mw } from "./middleware";
import browserPlugin from "router5-plugin-browser";

export const router = createRouter(routes, {
  defaultRoute: "top",
});

// router.useMiddleware(mw(routes));
router.usePlugin(browserPlugin());
