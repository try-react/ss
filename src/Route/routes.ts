import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";

export const routes = [
  { name: "p1", path: "/p1" },
  { name: "p2", path: "/p2" },
  { name: "lazy", path: "/lazy" },
  // -----------------------------------
  {
    name: "demo1",
    // id(数値)の指定
    path: "/demo1/:id<\\d+>",
  },
  {
    children: [
      {
        name: "n1",
        path: "/n1",
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
