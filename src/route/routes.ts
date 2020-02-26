/* eslint-disable sort-keys-fix/sort-keys-fix */

import { create as x } from "~/components/environments/demo2/n2";

export const routes = [
  {
    name: "top",
    path: "/",
    _meta: {
      createContent: () =>
        import(
          /* webpackPrefetch: true */ "~/components/environments/top"
        ).then(({ create }) => create),
    },
  },
  {
    name: "p1",
    path: "/p1",
    _meta: {
      createContent: () =>
        import(/* webpackPrefetch: true */ "~/components/environments/p1").then(
          ({ create }) => create,
        ),
    },
  },
  {
    name: "p3",
    path: "/p3",
    _meta: {
      createContent: () =>
        import(/* webpackPrefetch: true */ "~/components/environments/p3").then(
          ({ create }) => create,
        ),
    },
  },
  {
    name: "p4",
    path: "/p4",
    _meta: {
      createContent: () =>
        import(/* webpackPrefetch: true */ "~/components/environments/p4").then(
          ({ create }) => create,
        ),
    },
  },
  {
    name: "p5",
    path: "/p5",
    _meta: {
      createContent: () =>
        import(/* webpackPrefetch: true */ "~/components/environments/p5").then(
          ({ create }) => create,
        ),
    },
  },
  {
    name: "p6",
    path: "/p6",
    _meta: {
      createContent: () =>
        import(/* webpackPrefetch: true */ "~/components/environments/p6").then(
          ({ create }) => create,
        ),
    },
  },
  {
    name: "p7",
    path: "/p7",
    _meta: {
      createContent: () =>
        import(/* webpackPrefetch: true */ "~/components/environments/p7").then(
          ({ create }) => create,
        ),
    },
  },
  {
    name: "some",
    path: "/some",
    _meta: {
      createContent: () =>
        import(
          /* webpackPrefetch: true */ "~/components/environments/some"
        ).then(({ create }) => create),
    },
  },
  {
    name: "demo1",
    path: "/demo1",
    _meta: {
      createContent: () =>
        import(
          /* webpackPrefetch: true */ "~/components/environments/demo1"
        ).then(({ create }) => create),
    },
  },
  {
    name: "demo1/id",
    path: "/:id<\\d+>", // id(数値)の指定
    _meta: {
      createContent: () =>
        import(
          /* webpackPrefetch: true */ "~/components/environments/demo1/_id"
        ).then(({ create }) => create),
    },
  },
  {
    name: "demo2",
    path: "/demo2",
    _meta: {
      createContent: () =>
        import(
          /* webpackPrefetch: true */ "~/components/environments/demo2"
        ).then(({ create }) => create),
    },
  },
  {
    name: "demo2/n1",
    path: "/n1",
    _meta: {
      createContent: () =>
        import(
          /* webpackPrefetch: true */ "~/components/environments/demo2/n1"
        ).then(({ create }) => create),
    },
  },
  {
    name: "demo2/n2",
    path: "/n2",
    _meta: {
      createContent: () =>
        import(
          /* webpackPrefetch: true */ "~/components/environments/demo2/n2"
        ).then(({ create }) => create()),
    },
  },
];
