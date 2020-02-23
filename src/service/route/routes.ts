/* eslint-disable sort-keys-fix/sort-keys-fix */
import { lazyFetch } from "~/util/misc";

export const defaultRoute = "top";

export const routes = [
  { name: defaultRoute, path: "/" },
  {
    name: "p1",
    path: "/p1",
  },
  { name: "p2", path: "/p2" },
  { name: "p3", path: "/p3" },
  { name: "p4", path: "/p4" },
  {
    name: "some",
    path: "/some",
  },
  {
    name: "demo1",
    path: "/demo1",
  },
  {
    // id(数値)の指定
    name: "demo1.id",
    path: "/:id<\\d+>",
  },
  {
    name: "demo2",
    path: "/demo2",
  },
  {
    name: "demo2.n1",
    path: "/n1",
  },
  {
    name: "demo2.n2",
    path: "/n2",
    _meta: {
      onActivate: () => lazyFetch(),
      data: {},
    },
  },
];
