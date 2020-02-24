import { lazy } from "react";
import { HOC } from "~/containers/HOC";
import { router } from "~/route";

export const createPage = async () => {
  const Component = lazy(() =>
    import("~/components/ecosystems/Router5Demo").then(({ Router5Demo11X }) =>
      HOC(Router5Demo11X, {}),
    ),
  );

  router.setDependencies({ Content: Component });
};
