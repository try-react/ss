import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";

export const routes = [
  { name: "p1", path: "/p1" },
  { name: "p2", path: "/p2" },
  { name: "lazy", path: "/lazy" },
  // -----------------------------------
  {
    // id(数値)の指定
    name: "demo1",
    path: "/demo1/:id<\\d+>",
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
    path: "/demo2",
  },
];

export const router = createRouter(routes, {});
// 依存パラメタ
// router.setDependencies({ foo: "xxxxxxxxx" });
// useRouter().getDependencies()

// ミドルウェア
// const canActivate = (router) => (toState, fromState) => {
//   console.log("ok");
//   return true;
// };
// router.canActivate("demo2", canActivate);

router.usePlugin(browserPlugin());
router.start();
