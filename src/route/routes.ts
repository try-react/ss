/* eslint-disable sort-keys-fix/sort-keys-fix */
import { HOC } from "~/containers/HOC";
import { contentSubject } from "~/containers/Page/contents/Content";

export const routes = [
  {
    name: "top",
    path: "/",
    _meta: {
      transition: () =>
        import("~/components/environments/top").then(({ Component }) =>
          contentSubject.next(Component),
        ),
    },
  },
  {
    name: "p1",
    path: "/p1",
    _meta: {
      transition: () =>
        import("~/components/environments/p1").then(({ Component }) =>
          contentSubject.next(Component),
        ),
    },
  },
  {
    name: "p3",
    path: "/p3",
    _meta: {
      transition: () =>
        import("~/components/environments/p3").then(({ Component }) =>
          contentSubject.next(Component),
        ),
    },
  },
  {
    name: "p4",
    path: "/p4",
    _meta: {
      transition: () =>
        import("~/components/environments/p4").then(({ Component }) =>
          contentSubject.next(Component),
        ),
    },
  },
  {
    name: "p5",
    path: "/p5",
    _meta: {
      transition: () =>
        import("~/components/environments/p5").then(({ Component }) =>
          contentSubject.next(Component),
        ),
    },
  },
  {
    name: "p6",
    path: "/p6",
    _meta: {
      transition: () =>
        import("~/components/environments/p6").then(({ Component }) =>
          contentSubject.next(Component),
        ),
    },
  },
  {
    name: "p7",
    path: "/p7",
    _meta: {
      transition: () =>
        import("~/components/environments/p7").then(({ Component }) =>
          contentSubject.next(Component),
        ),
    },
  },
  {
    name: "some",
    path: "/some",
    _meta: {
      transition: () =>
        import("~/components/environments/some").then(({ Component }) =>
          contentSubject.next(Component),
        ),
    },
  },
  {
    name: "some2",
    path: "/some2",
    _meta: {
      transition: () =>
        import("~/components/environments/some2").then(({ Component }) =>
          contentSubject.next(Component),
        ),
    },
  },
  {
    name: "demo1",
    path: "/demo1",
    _meta: {
      transition: () =>
        import("~/components/environments/demo1").then(({ Component }) =>
          contentSubject.next(Component),
        ),
    },
  },
  {
    name: "demo1/id",
    path: "/:id<\\d+>", // id(数値)の指定
    _meta: {
      transition: () =>
        import("~/components/environments/demo1/_id").then(({ Component }) =>
          contentSubject.next(Component),
        ),
    },
  },
  {
    name: "demo2",
    path: "/demo2",
    _meta: {
      transition: () =>
        import("~/components/environments/demo2").then(({ Component }) =>
          contentSubject.next(Component),
        ),
    },
  },
  {
    name: "demo2/n1",
    path: "/n1",
    _meta: {
      transition: () =>
        import("~/components/environments/demo2/n1").then(({ Component }) =>
          contentSubject.next(Component),
        ),
    },
  },
  {
    name: "demo2/n2",
    path: "/n2",
    _meta: {
      transition: async () => {
        const { lazyFetch } = await import("~/util/misc");
        const data = await lazyFetch();
        return import(
          "~/components/environments/demo2/n2"
        ).then(({ Component }) =>
          contentSubject.next(HOC(Component, { data })),
        );
      },
    },
  },
];
