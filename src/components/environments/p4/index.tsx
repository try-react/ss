import { lazy } from "react";
import { HOC } from "~/containers/HOC";
import { router } from "~/route";

export const createPage = async () => {
  const Component = lazy(() =>
    import("~/components/ecosystems/Some").then(({ Study1 }) =>
      HOC(Study1, {}),
    ),
  );

  router.setDependencies({ Content: Component });
};
