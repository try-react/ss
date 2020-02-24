import { lazy } from "react";
import { HOC } from "~/containers/HOC";
import { router } from "~/route";

export const createPage = async () => {
  const Component = lazy(() =>
    import("~/components/ecosystems/Some/FlexBox2").then(({ FlexBox2 }) =>
      HOC(FlexBox2, {}),
    ),
  );

  router.setDependencies({ Content: Component });
};
