import { lazy } from "react";
import { HOC } from "~/containers/HOC";
import { router } from "~/route";

export const createPage = async () => {
  const Component = lazy(() =>
    import("~/components/ecosystems/Some/CSSGrid").then(({ CSSGrid }) =>
      HOC(CSSGrid, {}),
    ),
  );

  router.setDependencies({ Content: Component });
};
