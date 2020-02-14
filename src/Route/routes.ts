import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";
import { P1 } from "~/components/Environments/P1";
import { P2 } from "~/components/Environments/P2";
import { Lazy } from "~/components/Environments/Lazy";

export const routes = [
  { Component: P1, name: "p1", path: "/p1" },
  { Component: P2, name: "p2", path: "/p2" },
  { Component: Lazy, name: "lazy", path: "/lazy" },
];

export const router = createRouter(routes);
router.usePlugin(browserPlugin());
router.start();
