/* eslint-disable sort-keys-fix/sort-keys-fix */
import createRouter from "router5";

type Routes = Parameters<typeof createRouter>[0];
export const routes: Routes = [
  { name: "top", path: "/" },
  { name: "p1", path: "/p1" },
  { name: "p2", path: "/p2" },
  { name: "p3", path: "/p3" },
  { name: "p4", path: "/p4" },
  { name: "p5", path: "/p5" },
  { name: "p6", path: "/p6" },
  { name: "p7", path: "/p7" },
  { name: "some", path: "/some" },
  { name: "demo1", path: "/demo1" },
  { name: "demo1.id", path: "/:id<\\d+>" }, // id(数値)の指定
  { name: "demo2", path: "/demo2" },
  { name: "demo2.n1", path: "/n1" },
  { name: "demo2.n2", path: "/n2" },
];
