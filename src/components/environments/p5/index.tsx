import { lazy } from "react";
import { HOC } from "~/containers/HOC";
import { router } from "~/route";

export const createPage = async () => {
  const Component = lazy(() =>
    import("~/components/ecosystems/Some/FlexBox").then(({ FlexBox }) =>
      HOC(FlexBox, {}),
    ),
  );

  router.setDependencies({ Content: Component });
};
