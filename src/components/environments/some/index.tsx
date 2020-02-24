import { lazy } from "react";
import { HOC } from "~/containers/HOC";
import { router } from "~/route";

export const createPage = async () => {
  const Component = lazy(() =>
    import("~/components/ecosystems/Lazy").then(({ Lazy }) => HOC(Lazy, {})),
  );

  router.setDependencies({ Content: Component });
};
