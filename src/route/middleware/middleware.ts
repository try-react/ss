import { Router, State } from "router5";
import { throwError } from "~/util/misc";

type Middleware = Parameters<Router["useMiddleware"]>[0];
export const middleware: Middleware = () => async (toState) => {
  await create(toState.name);
  return new Promise((r) => r({ ...toState }));
};

// TODO setDependencies XState

const create = (name: State["name"]) => {
  if (name === "demo2.n2") {
    return import("~/components/environments/demo2/n2").then(({ createPage }) =>
      createPage(),
    );
  }
  if (name === "p1") {
    return import("~/components/environments/p1").then(({ createPage }) =>
      createPage(),
    );
  }
  if (name === "top") {
    return import("~/components/environments/top").then(({ createPage }) =>
      createPage(),
    );
  }
  if (name === "p3") {
    return import("~/components/environments/p3").then(({ createPage }) =>
      createPage(),
    );
  }
  if (name === "p4") {
    return import("~/components/environments/p4").then(({ createPage }) =>
      createPage(),
    );
  }

  if (name === "p5") {
    return import("~/components/environments/p5").then(({ createPage }) =>
      createPage(),
    );
  }
  if (name === "p6") {
    return import("~/components/environments/p6").then(({ createPage }) =>
      createPage(),
    );
  }
  if (name === "p7") {
    return import("~/components/environments/p7").then(({ createPage }) =>
      createPage(),
    );
  }

  if (name === "some") {
    return import("~/components/environments/some").then(({ createPage }) =>
      createPage(),
    );
  }
  if (name === "demo1") {
    return import("~/components/environments/demo1").then(({ createPage }) =>
      createPage(),
    );
  }
  if (name === "demo1.id") {
    return import(
      "~/components/environments/demo1/_id"
    ).then(({ createPage }) => createPage());
  }

  if (name === "demo2") {
    return import("~/components/environments/demo2").then(({ createPage }) =>
      createPage(),
    );
  }

  if (name === "demo2.n1") {
    return import("~/components/environments/demo2/n1").then(({ createPage }) =>
      createPage(),
    );
  }

  return throwError("ページが見つからない");
};
