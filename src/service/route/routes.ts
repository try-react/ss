import { lazyFetch } from "~/util/misc";

export const routes = [
  { name: "top", path: "/" },
  {
    name: "p1",
    path: "/p1",
  },
  { name: "p2", path: "/p2" },
  {
    name: "some",
    path: "/some",
  },
  // -----------------------------------
  {
    // id(数値)の指定
    children: [
      {
        name: "id",
        path: "/:id<\\d+>",
      },
    ],
    name: "demo1",
    path: "/demo1",
  },
  {
    // nest
    children: [
      {
        name: "n1",
        path: "/n1",
      },
      {
        name: "n2",
        path: "/n2",
      },
    ],
    name: "demo2",
    onActivate: () => lazyFetch(),
    path: "/demo2",
  },
];
