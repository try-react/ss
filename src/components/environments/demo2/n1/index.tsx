import { lazy } from "react";
import { HOC } from "~/containers/HOC";
import { router } from "~/route";

export const createPage = async () => {
  const Component = lazy(() =>
    import("~/components/ecosystems/Router5Demo").then(({ Router5Demo21 }) =>
      HOC(Router5Demo21, {}),
    ),
  );

  router.setDependencies({ Content: Component });
};
