import { Router, State } from "router5";
import { throwError } from "~/util/misc";
import { subject } from "~/containers/Page/contents/Content";
import { routes } from "~/route";

type Middleware = Parameters<Router["useMiddleware"]>[0];
export const middleware: Middleware = () => async (toState) => {
  subject.next(await createContent(toState.name));
  return new Promise((r) => r({ ...toState }));
};

const createContent = (name: State["name"]) => {
  const [r] = routes.filter((v) => v.name === name);

  return r ? r._meta.createContent() : throwError("ページが見つからない");
};
