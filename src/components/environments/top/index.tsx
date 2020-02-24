import { lazy } from "react";
import { HOC } from "~/containers/HOC";
import { router } from "~/route";

export const createPage = async () => {
  const Component = lazy(() =>
    import("~/components/ecosystems/ContentList").then(({ ContentList }) =>
      HOC(ContentList, {}),
    ),
  );

  router.setDependencies({ Content: Component });
};
